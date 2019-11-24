import React from "react";
import styles from './Scoreboard.module.css';

export default function Scoreboard(props) {

    return (
      <div className='scoreStyling'>
          <div>{props.score} / {props.questionslength}</div>
    </div>
  );
}
