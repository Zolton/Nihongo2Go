import React, { useState, useEffect } from "react";

function QuestionButtons(props) {

    // Rename props for easier time
    let setCurrentIndex = props.setCurrentIndex
    let currentIndex = props.currentIndex
    let quizLength = props.quizLength

    // function clickHandler () {
        // check if selected is correct_answer
        // if so, display 'Correct!' and add to local storage 
        // if not, display Incorrect, lock radio buttons, and highlight correct answer

    // }

    return (
        <div>
            {/* <button onClick={ () => currentIndex > 0 ? (setCurrentIndex(currentIndex-1)) : (null) }>Previous Question</button> */}
            <button >Submit Answer</button>
            <button onClick={ () => currentIndex < quizLength ? (setCurrentIndex(currentIndex+1)) : (null) }>Next Question</button>
        </div>
    )
}

export default QuestionButtons