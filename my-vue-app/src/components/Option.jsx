import React from 'react'

const Option = ({options,score,setScore,answer,currentQuestion,setCurrentQuestion}) => {
  return (
    function checkAnswer(event){
        const index = event.target.name;
        if(options[index] === answer){
          setScore(score+1);
        }
        setCurrentQuestion(currentQuestion+1);
    }
    <div>
        {
           options.map((ele,index)=>{
        <button 
        name={index}
        onClick={checkAnswer}>{ele}</button>
})
    }
    </div>
  )
}

export default Option
