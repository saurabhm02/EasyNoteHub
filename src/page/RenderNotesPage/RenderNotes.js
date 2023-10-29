import React from 'react'
import { useNotes } from '../../createContext/NoteProvider';
import "./RenderNotes.css";
import NoteCard from '../../cards/NoteCard/NoteCard';

const RenderNotes = () => {

  const {notes} = useNotes();
  return (
    <div className="renderNotes">
      {
        notes.some((note) =>note.isPinned && !note.isArchived) 
            && 
          <h3>Pinned Notes</h3>
      }

      <div className="pinned">
        {
          notes.map((note) =>{
            if(note.isPinned && !note.isArchived){
              return(
                <NoteCard note={note} key={note.id}/>
              )
            }
            return null;
          })
        }
      </div>

      {
        notes.some((note)=> !note.isPinned && !note.isArchived)
         &&
         <h3>My Notes</h3>
      }

      <div className="oNotes">
          {
            notes.length == 0 && <p className="NoData">No Notes are Found</p>
          }
          {
            notes.map((note)=>{
              if(!note.isPinned && !note.isArchived){
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

export default RenderNotes;