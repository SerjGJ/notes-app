import React, { useState } from 'react'

export const Note = ({ note, onDelete, onEdit }) => {
  const [isEditing, setIsEditing] = useState(false)
  const [newText, setNewText] = useState(note.text)

  const handleEdit = () => {
    if (isEditing) {
      onEdit(note.id, newText)
    }
    setIsEditing(!isEditing)
  }

  return (
    <div className="note">
      {isEditing ? (
        <input
          type="text"
          value={newText}
          onChange={(e) => setNewText(e.target.value)}
        />
      ) : (
        <p>{note.text}</p>
      )}
      <button onClick={handleEdit}>
        {isEditing ? 'Сохранить' : 'Редактировать'}
      </button>
      <button onClick={() => onDelete(note.id)}>Удалить</button>
    </div>
  )
}
