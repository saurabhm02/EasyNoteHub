import React from 'react'
import { useNotes } from '../../createContext/NoteProvider';
import NoteCard from '../../cards/NoteCard/NoteCard';
import "./Archived.css"
import "../../cards/NoteCard/NoteCard.css"

const Archived = () => {
  const {notes} = useNotes();
  return (
    <div className="archivedPage">
      <h3>Archived Page</h3>

      <div className="archivedCards">
        {
          notes.map((note) =>{
            if(note.isArchived){
              return (
                <NoteCard note={note} key={note.id} />
              )
            }
            return null;
          })
        }
      </div>
    </div>
  )
}

export default Archived;