import React from 'react';
import Hobby from './components/Hobby.js';
import './App.css';

function App() {
  return (

    <div className="App">
     <div className="header">
      <h1>Hobbies</h1>
    </div>
    <h2>My favorite hobbie are:</h2>
      <Hobby name="Running" imageURL="https://i.ibb.co/0MCVvGx/braden-collum-9-HI8-UJMSd-ZA-unsplash.jpg" description="Jogging fast" />
      <Hobby name="Programming" imageURL="https://i.ibb.co/JpY0PKx/arif-riyanto-v-JP-w-Z6h-GBg-unsplash.jpg" description="Coding software" />
      <Hobby name="Reading" imageURL="https://i.ibb.co/vHdM2x5/seven-shooter-h-PKTYw-J4-FUo-unsplash.jpg" description="Expressing an interest in books" />
    </div>
  );
}

export default App;
