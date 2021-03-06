import React from 'react';
import { Routes, Route } from "react-router-dom";

import Main from './components/Main';

import Dashboard from './pages/Dashboard'

import Darslar from './pages/Darslar'
import Groups from './pages/Groups'
import Students from './pages/Students'
import Teachers from './pages/Teachers'
import Xisobot from './pages/Xisobot'
import Sidebar from './components/Sidebar';
import LoginPage from './pages/LoginPage';
import MarkazlarPage from './pages/MarkazlarPage';
import MarkazlarArchive from './components/MarkazlarArchive';
import DaromadPage from './pages/DaromadPage';
import Fanlar from './pages/Fanlar';
import RoomsPage from './pages/RoomsPage';
import Test from './Test';



function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/darslar' element={<Darslar />} />
        <Route path='/groups' element={<Groups />} />
        <Route path='/students' element={<Students />} />
        <Route path='/teachers' element={<Teachers />} />
        <Route path='/xisobot' element={<Xisobot />} />
        <Route path='/' element={<LoginPage />} />
        <Route path='/markazlarPage' element={<MarkazlarPage />} />
        <Route path='/daromadPage' element={<DaromadPage />} />
        <Route path='/test' element={<Test />} />
        <Route path='/markazlarArchive' element={<MarkazlarArchive />} />
        <Route path='/fanlar' element={<Fanlar />} />
        <Route path='/rooms' element={<RoomsPage />} />
      </Routes>
    </div>
  );
}

export default App;
