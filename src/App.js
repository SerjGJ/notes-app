import React, { useState, useEffect } from 'react'
import { NoteList } from './components/NoteList'
import { NoteForm } from './components/NoteForm'
import { ThemeToggle } from './components/ThemeToggle'
import { NoteSearch } from './components/NoteSearch'
import './App.css'

export const App = () => {
  const [notes, setNotes] = useState([])
  const [theme, setTheme] = useState('light')
  const [searchQuery, setSearchQuery] = useState('')

  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem('notes'))
    if (savedNotes) {
      setNotes(savedNotes)
    }
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme) {
      setTheme(savedTheme)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes))
  }, [notes])

  useEffect(() => {
    localStorage.setItem('theme', theme)
  }, [theme])

  const addNote = (text) => {
    const newNote = { id: Date.now(), text }
    setNotes([...notes, newNote])
  }

  const deleteNote = (id) => {
    setNotes(notes.filter((note) => note.id !== id))
  }

  const editNote = (id, newText) => {
    setNotes(
      notes.map((note) => (note.id === id ? { ...note, text: newText } : note))
    )
  }

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  const filteredNotes = notes.filter((note) =>
    note.text.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <div className={`app ${theme}`}>
      <h1>Приложение для заметок</h1>
      <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
      <NoteSearch searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <NoteForm onAdd={addNote} />
      <NoteList notes={filteredNotes} onDelete={deleteNote} onEdit={editNote} />
    </div>
  )
}
