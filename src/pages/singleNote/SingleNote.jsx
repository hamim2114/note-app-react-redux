import React from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'

const SingleNote = () => {
  const {id} = useParams();
  const {notes} = useSelector(state => state.note);
  const note = notes.filter(item => item.id === id);
 
  return (
    <section className="note-single-section px-4">
      <h2 className="my-4 fs-20">{note[0].noteTitle}</h2>
      <div className="py-2">
        <p>{note[0].noteContent}</p>
      </div>
    </section>
  )
}

export default SingleNote