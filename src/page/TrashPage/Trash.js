import React from 'react'
import { useNotes } from '../../createContext/NoteProvider';
import TrashCard from '../../cards/TrashCard/TrashCard';
import "./Trash.css"

const Trash = () => {
  const {trash} = useNotes();
  return (
    <div className='trashPage'>
      <h3>Trash Page</h3>
      <div className="TrashCards">
        {
          trash.map((note) =>{
            return(
              <TrashCard note={note} key={note.id} />
            )
          })
        }
      </div>
    </div>
  )
}

export default Trash;