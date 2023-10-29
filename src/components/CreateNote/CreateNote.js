import React, { useRef } from 'react'
import { useNotes } from '../../createContext/NoteProvider';
import { v4 as uuid} from 'uuid';
import "./CreateNote.css"

const CreateNote = () => {
    const textareaRef = useRef(null);
    const { title, setTitle, details, setDetails, notes, setNotes } = useNotes();

    const inputHandler = () => {
        const textarea = textareaRef.current;
    
        textarea.style.height = 'auto';
        textarea.style.height = `${textarea.scrollHeight}px`;
        textarea.style.overflowY = textarea.scrollHeight > textarea.clientHeight ? 'auto' : 'hidden';
    };

    const onClickHanler = () => {
        let inputElement = document.querySelector('.input');
        if (inputElement.classList.contains('short')) {
            document.querySelector('.input input').setAttribute('placeholder', 'Title');
            inputElement.classList.remove('short');
            textareaRef.current.focus();
        }
    }; 

    const addBtnHandler = () => {
        let inputElement = document.querySelector('.input');
        if(!inputElement.classList.contains('short')){
            document.querySelector('.input input').setAttribute('placeholder','Make a Note..');
            inputElement.classList.add('short');
        }
        if(title.length > 0 || details.length > 0){
            setNotes([...notes,{"id":uuid(), "title":title, "note":details, "isArchived":false, "isPinned":false}])
        }
        setTitle("");
        setDetails("");

    };

    return (
        <div className="createNode">
            <div className="input short">
                <input value={title} placeholder="Make a Note.." type="text" onChange={(e) => setTitle(e.target.value)} onClick={onClickHanler} />
                <textarea value={details} placeholder="Make a Note..." onChange={(e) => setDetails(e.target.value)} ref={textareaRef} rows={1} onInput={inputHandler} />
                <div className="buttons">
                    <button onClick={addBtnHandler}>Add</button>
                </div>
            </div>
        </div>
    );
}

export default CreateNote;
