import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.scss';
import AddNote from './pages/addNote/AddNote';
import EditNote from './pages/editNote/EditNote';
import Home from './pages/home/Home';
import Notes from './pages/notes/Notes';
import SingleNote from './pages/singleNote/SingleNote';

function App() {
   return (
      <div className='App'>
         <BrowserRouter>
            <Routes>
               <Route path='/' element={<Home />}>
                  <Route path='/home' element={<Notes />} />
                  <Route path='/add' element={<AddNote />} />
                  <Route path='edit/:id' element={<EditNote />} />
                  <Route path='note/:id' element={<SingleNote />} />
               </Route>
            </Routes>
         </BrowserRouter>
      </div>
   );
}

export default App;


