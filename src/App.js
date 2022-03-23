import React from 'react';
import './App.css';
import answers from './answers';
import EightBall from './eightBall';

function App() {

  return (
    <>
      <h1>Welcome to Peter's magic Eight ball</h1>
      <EightBall answers={answers} />
    </>
  );
}

export default App;
