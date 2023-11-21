import React from 'react';
import Header from './comps/Header';
import Login from './comps/login';
import RegistrationForm from './comps/reg';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Newmenu from './comps/Newmenu';

function App() {
  return (
    <div className="App">  
    <Router>
      <Routes>
        <Route exact path='/' element={<Header/>}/>
        <Route  path='/reg' element={<Login/>}/>
        <Route  path='/sig' element={<RegistrationForm/>}/>
        <Route  path='/new' element={<Newmenu/>}/>
      </Routes>
    </Router>

    </div>
  );
}

export default App;