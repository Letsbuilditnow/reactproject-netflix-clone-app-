import React from 'react'
import NavBar from './Components/NavBar/NavBar.js';
import './App.css'
import Banner from './Components/Banner/Banner.js';
import RowPost from './Components/RowPost/RowPost.js';
import Footer from './Components/Footer/Footer.js';
import {Action,Originals, Romance,Drama} from './url'
import Homepage from './Components/Homepage/Homepage.jsx';
import SignupEmail from './Components/SignupEmail/SignupEmail.jsx';


function App() {
  return (
    <div className="App">
  `  <NavBar/>
    <Banner/>
    <RowPost title="Netflix Orginals" url={Originals}/>
    <RowPost title="Action" isSmall url={Action} />
    <RowPost title="Romance" isSmall url={Romance}/>
    <RowPost title="Drama" isSmall url={Drama}/>

   <Footer></Footer>`
{/* <Homepage></Homepage>
<SignupEmail></SignupEmail> */}

    </div>
  );
}

export default App;
