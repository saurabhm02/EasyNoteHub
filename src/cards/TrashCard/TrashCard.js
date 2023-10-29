import React from 'react'
import { useNotes } from '../../createContext/NoteProvider'
import {BsBoxArrowUp} from "react-icons/bs"
import {PiTrash} from "react-icons/pi"
import "../NoteCard/NoteCard.css"

const TrashCard = (props) => {
    const {notes, setNotes, trash, setTrash} = useNotes();

    const RestoreNote = ()=>{
        const updateNotes = trash.filter((note) => note.id !== props.note.id);
        setNotes([...notes, props.note]);
        setTrash(updateNotes);
    }

    const DeleteNote = () =>{
        const updateNotes = trash.filter((note)=> note.id !== props.note.id);
        setTrash(updateNotes);
    }

  return (
    <div className="noteCard">
        <div className="title">{props.note.title ? props.note.title : " "}</div>

        <div className="noteContent">
            <pre>{props.note.note}</pre>
        </div>

        <div className="noteCard-btn note-card">
          <i onClick={RestoreNote}><BsBoxArrowUp/></i>

          <i onClick={DeleteNote}><PiTrash/></i>
        </div>

    </div>
  )
}

export default TrashCard