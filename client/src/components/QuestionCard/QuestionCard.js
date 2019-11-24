import React, { useState } from 'react';
import Question from '../Question/index';
import styles from './QuestionCard.module.css'; // Import css modules stylesheet as styles

export default function QuestionCard () {


    return (
        <div className='questionStyling'>
        <Question />
        </div>
    );

}