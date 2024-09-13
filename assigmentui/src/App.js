import { useEffect, useState } from 'react';
import './App.css';
import QuestionCard from './questions/questionCard';


function nextCard(idx){
    return idx = idx + 1;
}

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
              <QuestionCard  question={list.question} type={list.fieldType}  count={list.count} name={"Qname"+index+1}></QuestionCard>
              <button onClick={() => nextCard(index)}>Next</button>
            </>
          ))
        }
      </ul>
    </div>
  );
}

export default App;
