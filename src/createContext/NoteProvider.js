import React, { createContext, useContext, useEffect, useState } from 'react'

const NoteContext = createContext();

const localNotes = JSON.parse(localStorage.getItem("notes")) || [];
const localTrash = JSON.parse(localStorage.getItem("trash")) || [];

export const NoteProvider = (props) => {

  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const [notes, setNotes] = useState(localNotes);
  const [trash, setTrash] = useState(localTrash);

  useEffect(()=>{
    localStorage.setItem("notes", JSON.stringify(notes));
    localStorage.setItem("trash", JSON.stringify(trash));
  }, [notes, trash]);

  return (
    <NoteContext.Provider value = {{notes, setNotes, trash, setTrash, title, setTitle, details, setDetails, }}>
        {props.children}
    </NoteContext.Provider>
   )
};

export const useNotes =()=> useContext(NoteContext);