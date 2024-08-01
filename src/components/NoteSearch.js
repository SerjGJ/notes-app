import React from 'react'

export const NoteSearch = ({ searchQuery, setSearchQuery }) => {
  return (
    <input
      type="text"
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
      placeholder="Поиск заметок..."
      className="note-search"
    />
  )
}
