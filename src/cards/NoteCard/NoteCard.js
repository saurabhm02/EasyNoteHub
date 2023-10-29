import React from 'react'
import "./NoteCard.css"
import { useNotes } from '../../createContext/NoteProvider'
import {PiTrash} from "react-icons/pi";
import {BiArchiveOut, BiArchiveIn} from 'react-icons/bi';
import {TbPinned, TbPinnedFilled} from "react-icons/tb"

const NoteCard = (props) => {

  const {notes, setNotes, trash, setTrash } = useNotes();

  const pinTag = () =>{
    const updateNotes = notes.map((note)=>{
      if(note.id === props.note.id){
        return {...note, isPinned : !note.isPinned };
      }

      return note;
    });
    setNotes(updateNotes);
  };

  const archiveTag=()=>{
    const updateNotes = notes.map((note) =>{
      if(note.id === props.note.id){
        return {...note, isArchived : !note.isArchived };
      }
      return note;
    });
    setNotes(updateNotes);
  };

  const moveToTrash = () =>{
    const updateNotes = notes.filter((note) => note.id !== props.note.id); 
    setTrash([...trash, props.note]);
    setNotes(updateNotes);
  };

  return (
    <div className="noteCard">
      <div className="pin-btn note-card">
          <i onClick={pinTag}>
            {props.note.isPinned ? <TbPinnedFilled/> : <TbPinned/>}
          </i>
      </div>

      <div className="title">
        {props.note.title ? props.note.title : " "}
      </div>

      <div className="noteContent">
        <pre>{props.note.note}</pre>
      </div>

      <div className="noteCard-btn note-card">
          <i onClick={archiveTag}>
          {props.note.isArchived ? <BiArchiveOut /> : <BiArchiveIn />}
          </i>

          <i onClick={moveToTrash}><PiTrash/></i>
      </div>
    </div>
  )
}

export default NoteCard;