import React, { useState } from 'react';
import { db } from '../firebase';
import { UserAuth } from '../context/AuthContext';
import { collection, addDoc } from 'firebase/firestore';

const NoteForm = () => {
    const { user } = UserAuth();
    const [noteText, setNoteText] = useState('');

    //add new note
    const addNote = async (e) => {
        e.preventDefault();
        if (noteText.trim() !== '') {
            await addDoc(collection(db, 'notes'), {
                text: noteText,
                timestamp: new Date().getDate(),
                userId: user.uid
            });
            setNoteText('');
        } else {
            alert('¡La nota no puede estar vacía!')
        }
    }

    return (
        <div className='flex flex-col gap-2'>
            <div className="note-form border border-slate-800 rounded max-w-2xl">
                <textarea
                    className='p-2'
                    value={noteText}
                    onChange={(e) => setNoteText(e.target.value)}
                    placeholder="Ingresa tu nota..."
                />
            </div>
            <button className='border border-slate-800 rounded hover:bg-slate-400 duration-75' onClick={addNote}>Añadir nota</button>
        </div>
    );
};

export default NoteForm;
