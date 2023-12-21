import React from 'react';

const Note = ({ note }) => {
    return (
        <div className="flex justify-center items-center note border border-slate-950 rounded m-5 p-2" style={{ maxWidth: 250 }}>
            <p style={{ fontSize: 16 }}>{note.text}</p>
        </div>
    );
};

export default Note;
