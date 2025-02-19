import { useState } from 'react'
import './App.css'
import data from './data.json'
import Question from './components/Question'
import Option from './components/Option'

function App() {
  const[currentQuestion,setCurrentQuestion] = useState(0);
  const[score,setScore] = useState(0);

  return (
    <>
      <Question question={data[currentQuestion].question}/>
      <Option 
      options={data[currentQuestion].options}
       score={score} setScore={setScore} 
       answer={data[currentQuestion].answer
       currentQuestion={currentQuestion}
       setCurrentQuestion={setCurrentQuestion}
       }
       />
    </>
  )
}

export default App
