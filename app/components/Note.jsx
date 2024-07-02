import React from 'react';

const Note = ({ note, onDelete }) => {
    return (
        <div className="flex flex-col justify-center items-center gap-2 border border-slate-950 rounded m-5 p-2 max-w-[250px] bg-white shadow-md relative">
            <p className="relative z-10 text-slate-900 text-base" style={{ fontSize: 16 }}>{note.text}</p>
            <button
                onClick={() => onDelete(note.id)}
                className="relative z-10 bg-red-500 text-white p-1 rounded ml-2"
                >
                Eliminar
            </button>
        </div>
    );
};

export default Note;
