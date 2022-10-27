import React, {useEffect} from 'react';
import './App.css';
import {Header} from "../components/header/Header";
import {Nav} from "../components/navbar/Nav";
import {Main} from "../components/main/Main";

function App() {
  return (
    <div className="App">
      <Header/>
        <div className='main_container'>
            <Nav/>
            <Main/>
        </div>


    </div>
  );
}

export default App;
