import { useState } from 'react'
import './App.css'
import Weather from './Weather';
import Lottie from 'lottie-react';


function App() {
  
  return (

    <div className="App">
     
      <div className="container rounded col-12 col-md-6">
      
      <Weather/>

      <footer className='mx-3 my-5'>This project was coded by {" "}
        <a href="https://github.com/Freshtanazari/react-app" target="_blank" rel="noreferrer">
          Freshta Nazari
        </a>
        {" "}
        and is {" "}
        <a href="https://github.com/Freshtanazari/react-app" target = "_blank" rel="noreferrer">open sourced on GitHub</a> 
        {" "},  {" "}
        <a href="https://sunny-nougat-6aace7.netlify.app/" target="_blank" rel='noreferrer'>hosted on Netlify</a> 
      </footer>
      </div>
    </div>
  )
}

export default App;
