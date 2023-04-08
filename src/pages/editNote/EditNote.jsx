import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import { editNote } from '../../redux/noteSlice';

const EditNote = () => {
  const dispatch = useDispatch();
  const {id} = useParams();
  const {notes} = useSelector(state => state.note);
  const tempNote = notes.filter(item => item.id === id);
  const [formData, setFormData] = useState(tempNote[0]);
  const [titleError, setTitleError] = useState(false);
  const [contentError, setContentError] = useState(false);
  const [canSave, setCanSave] = useState(false);

  const onFormDataChange = (e) => {
    e.preventDefault();
    if(e.target.name === 'noteTitle'){
      if(e.target.value.length === 0){
        setTitleError(true)
      } else {
        setTitleError(false)
        setCanSave(true)
      }
    };
    if(e.target.name === 'noteContent'){
      if(e.target.value.length === 0){
        setContentError(true)
      } else {
        setContentError(false)
        setCanSave(true)
      }
    };
    setFormData(prev => {
      return {
        ...prev,
        [e.target.name] : e.target.value
      }
    });
  };

  const onSaveNoteClicked = () => {
    if(!titleError && !contentError){
      dispatch(editNote(formData))
      toast('note updated!');
      setFormData({noteTitle: '', noteContent: ''})
    }
  }
  return (
    <div>
      <section className="note-form-section">
        <h2 className="my-4 fs-16">Add New Note</h2>
        <form className="note-form" onSubmit={onFormDataChange}>
          <div className="form-element">
            <label htmlFor="noteTitle"></label>
            <input type="text" id='noteTitle' name='noteTitle' value={formData.noteTitle} placeholder='title here..'
            onChange={onFormDataChange}
            className='form-control'
            />
            <span className="form-error-text">{titleError ? 'Title cannot be empty!' : ''}</span>
          </div>

          <div className="form-element">
            <label htmlFor="noteContent"></label>
            <textarea type="text" rows={10} id='noteContent' name='noteContent' value={formData.noteContent} placeholder='Content here..'
            className='form-control' onChange={onFormDataChange}/>
            <span className="form-error-text">{contentError ? 'Content cannot be empty!' : ''}</span>
          </div>
          <button onClick={onSaveNoteClicked} disabled={!canSave} className="btn btn-default">Save Note</button>
          <ToastContainer/>
        </form>
      </section>
    </div>
  )
}

export default EditNote