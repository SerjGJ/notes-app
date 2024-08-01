import React, { useState } from 'react'

export const NoteForm = ({ onAdd }) => {
  const [text, setText] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    onAdd(text)
    setText('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Введите свою заметку"
      />
      <button type="submit">Добавить заметку</button>
    </form>
  )
}
