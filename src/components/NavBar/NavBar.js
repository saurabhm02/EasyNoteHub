import React, { useRef } from 'react'
import { useSidebar } from '../../createContext/SidebarProvider';
import {RiMenuUnfoldLine} from "react-icons/ri"
import logo from "../../assets/logo.png"
import {RiSearch2Line} from "react-icons/ri"; 
import {GoSun} from "react-icons/go";
import {BiMoon} from "react-icons/bi";
import {FiUser} from "react-icons/fi"
import "./NavBar.css";

const NavBar = () => {

  const {sidebar, setSidebar} = useSidebar();
  const inputRef = useRef(null);
  const sidebarToggle =()=>{
    setSidebar(!sidebar);
  }

  return (
    <div className="navbar">
      <div className="section sec1">
        <div onClick={sidebarToggle} className="mainMenu">
          <button className="btn mainMenu">
            <i><RiMenuUnfoldLine/></i>
          </button>
        </div>

        <div className="logoContainer">
          <div className="logo">
            <img src={logo} alt='logo'/>
          </div>

          <div className="logoText">Notes</div>
        </div>


      </div>

      <div className="section sec2">

        <div className="searchContainer">

          <div className="searchInput">
            <input type="text " ref={inputRef} placeholder="Search.." />
          </div>

          <div className="serachIcon">
            <button className="btn searchContainer">
               <i className="Bisearch"><RiSearch2Line size={23}/></i>
            </button>
          </div>

        </div>

        <div className="setting">
          <button className="btn theme">
            <i className="sun"><GoSun/></i>
            <i className="moon"><BiMoon/></i>
          </button>
        </div>

      </div>

      <div className="section sec3">
        <div className="accountContainer">
          <button className="btn user">
            <i><FiUser/></i>
          </button>
        </div>
      </div>
    </div>
  )
}

export default NavBar;