import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuid } from 'uuid';

const setLocal = (name, item) => {
   localStorage.setItem(name, JSON.stringify(item));
};
const getLocal = (name) => {
   const data = localStorage.getItem(name);
   if (data) {
      return JSON.parse(localStorage.getItem(name));
   } else {
      return [];
   }
};

const initialState = {
   notes: getLocal('notes'),
   error: null,
   count: 0,
};

const noteSlice = createSlice({
   name: 'notes',
   initialState,
   reducers: {
      addNewNote(state, action) {
         const { noteTitle, noteContent } = action.payload;
         let id = uuid();
         let newPost = { id, noteTitle, noteContent };
         newPost.noteDate = new Date().toString();
         state.notes.push(newPost);
         setLocal('notes', state.notes);
      },
      removeNote(state, action) {
         const tempNote = state.notes.filter(
            (item) => item.id !== action.payload.id
         );
         state.notes = tempNote;
         setLocal('notes', state.notes);
      },
      editNote(state, action) {
         const { id, noteTitle, noteContent } = action.payload;
         const tempNote = state.notes.map((item) => {
            if (item.id === id) {
               item.noteTitle = noteTitle;
               item.noteContent = noteContent;
               item.noteDate = new Date().toDateString();
            }
            return item;
         });
         state.notes = tempNote;
         setLocal('notes', tempNote);
      },
      increaseCount(state, action) {
         state.count = state.count + 1;
      },
   },
});

export const { addNewNote, removeNote, editNote, increaseCount } =
   noteSlice.actions;
export default noteSlice.reducer;
