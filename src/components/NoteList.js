import React from 'react'
import { Note } from './Note'

export const NoteList = ({ notes, onDelete, onEdit }) => {
  return (
    <div className="note-list">
      {notes.map((note) => (
        <Note key={note.id} note={note} onDelete={onDelete} onEdit={onEdit} />
      ))}
    </div>
  )
}
