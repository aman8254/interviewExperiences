import { TextField } from '@mui/material';
import React, { useState } from 'react'

var addquestion;

function TakeQuestion() {

  const [questions, setquestions] = useState({
    counter: 1,
    questionIds: [1]
  })
  
  addquestion= ()=>{
    setquestions(prevData=>{
      return(
        {
        counter: prevData.counter+1,
        questionIds: prevData.questionIds.push((prevData.counter+1))
        }
      )
    })
  }

  return (
    <>
      {(questions.questionIds).map((id)=>{
        return(
        <TextField id={String(id)} variant='standard'></TextField>
        )
      })}
    </>
  )
}

export default TakeQuestion;