import React from 'react';
import { Routes, Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';

import Main from './Main';
import Header from './include/Header';
import Syntax from './test/Syntax';
import Variable from './test/Variable';
import State from './test/State';
import Count from './test/Count';
import Loop from './test/Loop';

function App() {
  console.warn = function no_console() {};
  return (
    <>
    <Header/>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Main />}/>
          <Route path='/test' element={<Syntax />}/>
          <Route path='/test/variable' element={<Variable />}/>
          <Route path='/test/state' element={<State />}/>
          <Route path='/test/count' element={<Count />}/>
          <Route path='/test/loop' element={<Loop />}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;