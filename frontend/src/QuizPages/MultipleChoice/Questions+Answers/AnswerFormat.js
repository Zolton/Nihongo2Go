import React, { useState, useEffect } from "react";
import QuestionButtons from "./QuestionButtons"

function AnswerFormat(props) {
    let answerObject = props.answerObject
    let setCurrentIndex = props.setCurrentIndex
    let currentIndex = props.currentIndex
    let quizLength = props.quizLength
    return (
      <div>
        {answerObject.map(singleAnswer => {
          return (
            <form>
              <div className="radio">
                <label>
                  <input type="radio" value="options1" checked={false} />
                  {singleAnswer.answer}
                </label>
              </div>
            </form>
          );
        })}
        <QuestionButtons setCurrentIndex={setCurrentIndex} currentIndex={currentIndex} quizLength = {quizLength}  />
      </div>
    );
  }

  export default AnswerFormat