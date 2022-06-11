import React from 'react'
import NavBar from './Components/NavBar/NavBar.js';
import './App.css'
import Banner from './Components/Banner/Banner.js';
import RowPost from './Components/RowPost/RowPost.js';
import {Action,Originals} from './url'

function App() {
  return (
    <div className="App">
    <NavBar/>
    <Banner/>
    <RowPost title="Netflix Orginals" url={Originals}/>
    <RowPost title="Action" isSmall url={Action} />

    </div>
  );
}

export default App;
