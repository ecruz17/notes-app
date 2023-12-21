"use client"
import React, { useState, useEffect } from 'react';
import { db } from '../firebase';
import Note from '../components/Note';
import NoteForm from '../components/NoteForm';
import { UserAuth } from "../context/AuthContext";
import { collection, getDoc, onSnapshot, query, querySnapshot } from 'firebase/firestore';

export default function NotesView() {
    const [notes, setNotes] = useState([]);
    const { user } = UserAuth();

    useEffect(() => {
        const q = query(collection(db, 'notes'));
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            let notesArray = [];
            querySnapshot.forEach((doc) => {
                if (doc.data().userId == user.uid) {
                    notesArray.push({ ...doc.data(), id: doc.id });
                }
            })
            setNotes(notesArray);
        })
    }, [])

    return (
        <div className='col-1'>
            <h2 className='flex justify-center items-center' style={{ fontWeight: 'bold', fontSize: '3rem' }}>Mis notas</h2>
            <p className='flex justify-center items-center'>Hola {user?.displayName}!</p>
            <div className='flex justify-center items-center'>
                <NoteForm />
            </div>
            <div className="notes-list">
                {notes.map((note) => (
                    <Note key={note.id} note={note} />
                ))}
            </div>
        </div>
    );
};

