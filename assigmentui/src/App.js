import { useEffect, useState } from 'react';
import './App.css';
import QuestionCard from './questions/questionCard';



function App() {
  const [questions, setQuestions] = useState([])

  useEffect(() => {
    fetch("http://localhost:3000/question")
      .then(respose => respose.json())
      .then(data => setQuestions(data))
      .catch(err => console.log(err))
  }, [])
  return (
    <div className="App">
      <ul>
        {
          questions.map((list, index) => (
            <>
            <QuestionCard question = {list.question}></QuestionCard></>
          ))
        }
      </ul>
    </div>
  );
}

export default App;
