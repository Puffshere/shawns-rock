import React from 'react';
import './App.module.css';
import Scoreboard from './Scoreboard/index';
import QuestionCard from './QuestionCard/index';

function App() {
  return (
    <div>
      <div className='header'>
        Rock Quiz
<hr></hr>
</div>
      <div className='container'>

        <div className='card col-sm-12'>
          <QuestionCard />
        </div>

        <div className='finalScore'>
          <Scoreboard />
        </div>

      </div>

    </div>
  );
}

export default App;
