"use client";
import React, { useState, useEffect } from 'react';
import { db } from '../firebase';
import Note from '../components/Note';
import NoteForm from '../components/NoteForm';
import { UserAuth } from "../context/AuthContext";
import { collection, onSnapshot, query } from 'firebase/firestore';
import { doc, deleteDoc } from 'firebase/firestore';

export default function NotesView() {
    const [notes, setNotes] = useState([]);
    const { user } = UserAuth();

    useEffect(() => {
        const q = query(collection(db, 'notes'));
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            let notesArray = [];
            querySnapshot.forEach((doc) => {
                if (doc.data().userId === user.uid) {
                    notesArray.push({ ...doc.data(), id: doc.id });
                }
            });
            setNotes(notesArray);
        });

        return () => unsubscribe(); // Clean up subscription on unmount
    }, [user]);

    const deleteNote = async (id) => {
        try {
            const noteRef = doc(db, 'notes', id);
            await deleteDoc(noteRef);
            setNotes(notes.filter(note => note.id !== id)); // Update the state after deletion
            console.log('Nota eliminada exitosamente');
        } catch (error) {
            console.error('Error eliminando la nota: ', error);
        }
    };

    return (
        <div className='col-1'>
            <h2 className='flex justify-center items-center' style={{ fontWeight: 'bold', fontSize: '3rem' }}>Mis notas</h2>
            <p className='flex justify-center items-center'>Hola {user?.displayName}!</p>
            <div className='flex justify-center items-center'>
                <NoteForm />
            </div>
            <div className="notes-list flex flex-wrap justify-center mt-10">
                {notes.map((note) => (
                    <Note key={note.id} note={note} onDelete={deleteNote} />
                ))}
            </div>
        </div>
    );
};
