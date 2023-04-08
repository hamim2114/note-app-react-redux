import React from 'react'
import { useSelector } from 'react-redux'
import NoteList from '../../components/noteList/NoteList'

const Notes = () => {
  const {notes} = useSelector(state => state.note)
  return (
    <div>
      <NoteList notes={notes} />
    </div>
  )
}

export default Notes