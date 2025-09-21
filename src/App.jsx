import { useState } from 'react'


import './App.css'
import Weather from './Weather';

function App() {
  return (

    <div className="App">
      <div className="container">

      <Weather />
      <footer>This project was coded by {" "}
        <a href="https://github.com/Freshtanazari/react-app" target="_blank" rel="noreferrer">
          Freshta Nazari
        </a>
        {" "}
        and is {" "}
        <a href="https://github.com/Freshtanazari/react-app" target = "_blank" rel="noreferrer">opend sourced on GitHub</a> 
        {" "} and {" "}
        <a href="#" target="_blank" rel='noreferrer'>hosted on Netlify</a> 
      </footer>
      </div>
    </div>
  )
}

export default App
