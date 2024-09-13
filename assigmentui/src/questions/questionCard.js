import { useState } from "react"



const QuestionCard = ({ question, type, count, name }) => {
    return (
      <div key={count}>
        <h1>{question}</h1>
        <input
          type={type}
          name={name} // Use unique name for each input
        />
      </div>
    );
  };

export default QuestionCard