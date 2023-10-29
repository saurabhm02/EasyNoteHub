import { Route, Routes } from 'react-router-dom';
import './App.css';
import CreateNote from './components/CreateNote/CreateNote';
import React from 'react';
import { PageProvider } from './createContext/PageProvider';
import { SidebarProvider } from './createContext/SidebarProvider';
import NavBar from './components/NavBar/NavBar';
import SideBar from './components/SideBar/SideBar';
import { NoteProvider } from './createContext/NoteProvider';
import RenderNotes from './page/RenderNotesPage/RenderNotes';
import Archived from './page/ArchivedPage/Archived';
import Trash from './page/TrashPage/Trash';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <PageProvider>
        <SidebarProvider>
          <NavBar />
          <SideBar />
          <div className="content">
            <NoteProvider>
              <CreateNote />
              <Routes>
                <Route path="/" element={<RenderNotes />} />
                <Route path="/archived" element={<Archived />} />
                <Route path="/trash" element={<Trash />} />
              </Routes>
            </NoteProvider>
          </div>
          <Footer />
        </SidebarProvider>
      </PageProvider>
    </div>
  );
}

export default App;
