import React from 'react';
import { Routes, Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';

import Main from './Main';
import Header from './include/Header';
import Syntax from './test/Syntax';

function App() {
  console.warn = function no_console() {};
  return (
    <>
    <Header/>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Main />}/>
          <Route path='/test' element={<Syntax />}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;