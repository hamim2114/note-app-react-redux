import './noteList.scss'
import { ImCancelCircle } from 'react-icons/im'
import { FiEdit } from 'react-icons/fi'
import {parseISO, formatDistanceToNow} from 'date-fns'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { removeNote } from '../../redux/noteSlice'

const NoteList = ({notes}) => {
  const dispatch = useDispatch();
  
  if(!notes || notes.length === 0){
    return (
      <div className="not-found">Notes empty</div>
      )
  }
  return (
    <div className="notes">
      <h5 className="fs-18 fw-8 text-uppercase notes-title">Notes</h5>
      <div className="notes-list grid">
        {
          notes.map((item) => (
            
            <div key={item.id} className="notes-list hover">
              <Link to={`/note/${item.id}`}>
              <div className="notes-item-title">
                {item.noteTitle.substring(0,88) + '...'}
              </div>
              <div className="notes-item-body">
                {item.noteContent.substring(0,150) + '...'}
              </div>
              <div className="notes-item-date text-capitalize">
                {/* {formatDistanceToNow(parseISO(item.noteDate))} */}
              </div>
              </Link>
              <div className="notes-item-btns flex align-center justify-between">
                <div>
                  <button onClick={() => dispatch(removeNote({id: item.id}))} className="note-item-btn"><ImCancelCircle/></button>
                  <Link to={`/edit/${item.id}`} className='notes-item-btn'>
                    <FiEdit/>
                  </Link>
                </div>
                <Link to={`/note/${item.id}`} className='read-more-btn'>Read More</Link>
              </div>
            </div>
            
          ))
        }
      </div>
    </div>
  )
}

export default NoteList