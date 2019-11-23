import React from 'react';
import './App.module.css';
import Scoreboard from './Scoreboard/index';
import QuestionCard from './QuestionCard/index';



function App() {
  return (
  
    <div className="App">

      <p className='help'>ROCK QUIZ</p>
      <img className='slim' src={require(".././image/background.jpg")} alt='hello' />
      <img className='mood' src={require(".././image/mike.png")} alt='hello' />
      <QuestionCard />
      <img className='spirit' src={require(".././image/human.png")} alt='hello' /> 
      <img className='lost' src={require(".././image/score.png")} alt='hello' />
      <div className='top'>
      <Scoreboard />
      </div>
    </div>
   

  );
}
export default App;
