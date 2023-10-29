import React from 'react'
import { usePage } from '../../createContext/PageProvider';
import { useSidebar } from '../../createContext/SidebarProvider';
import {PiLightbulb} from "react-icons/pi";
import {BiArchive} from "react-icons/bi"
import {BsTrash} from "react-icons/bs"
import "./SideBar.css"
import { Link } from 'react-router-dom';


const SideBar = () => {
  const {setPage} = usePage();
  const {sidebar} = useSidebar();

  const onClickHandler =(e) =>{
    let id;
    if(e.target.tagName === "LI"){
      id = e.target.id;
    }
    else{
      id = e.target.parentElement.id;
    }

    setPage(id);
    document.querySelectorAll('.sidebar li').forEach((item) =>{
      if(id === item.id){
        item.classList.add('active');
      }
      else{
        item.classList.remove('active');
      }
    })
  }
  return (
    <div className={`sidebar ${sidebar? "short" : ""}`}>
      <ul>
        <Link to="/"><li onClick={onClickHandler} id='notes' className='active'> <i> <PiLightbulb/> </i> <span>Notes</span> </li></Link>
        <Link to="/archived"><li onClick={onClickHandler} id='archive'> <i> <BiArchive/> </i> <span>Archived</span> </li></Link>
        <Link to="/trash"><li onClick={onClickHandler} id='trash'> <i> <BsTrash/> </i> <span>Trash</span> </li></Link>
      </ul>
    </div>
  )
}

export default SideBar;