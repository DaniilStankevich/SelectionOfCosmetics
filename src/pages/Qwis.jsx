import React, { useState } from 'react'
import Button from '../components/button/Button';

import { questions } from '../questions/questions'
import { BrowserRouter as Router, Route, Redirect, Navigate, useNavigate } from 'react-router-dom';

export const Qwis = () => {
    
const [ index , setIndex ] = useState(0)
const [ result , setResult ] = useState([])

const navigate = useNavigate();


// Добавление ответа в массив 
function chengeValue (event) {

  console.log(event.target.value)
  console.log(questions[index].question)


 



  if(result.some((obj) => obj.question === questions[index].question )) {

 

    let newRes = result.map((el) => {

      if( el.question ===  questions[index].question) {
        return   {  question: questions[index].question,
                  answer: event.target.value                              }
      }

      return el;

    })

    console.log(newRes)
      setResult(newRes)
  }

  else {
    setResult([...result, { question: questions[index].question ,
                    answer: event.target.value  }])
  }


}



function next () {

  if(questions.length === result.length && result.length ===  index + 1 ) {
      setIndex(0)
      setResult([])
      navigate('/products');
    return
  }

  if (result.some((obj) => obj.question === questions[index].question  ) ) {
    setIndex((index + 1))
    }
  else  {
    alert('Пожалуйста, выберите ответ');
    }
}



function back () {
  setIndex(index - 1)
}




function chekAnser (value) {
  return result.some((obj) => obj.answer === value ? true : false  )
}



  return (

    <> 



    <div className="qwis" > 

                <div className="qwis__indicator">
                        {questions.map((el, i) => <div key={i}className={`qwis__indicator-item ${i === index ?'active':''}`} ></div>)}  
                </div>

                <div className="qwis__numberOfquestion">Вопрос {index+1} из {questions.length}</div>

                <div className="qwis__question">{questions[index].question}</div>


                <div className="qwis__listOfquestions">

                <ul>
                        { questions[index].answers.map((item, index ) => {

                        return (  

                            <li key={index}>
                                <label>
                                    <input
                                    type="radio"
                                    name="answer" 
                                    value={item}

                                    checked={chekAnser(item)}
                                    onChange={chengeValue} 
                                    />
                                {item}
                                </label>
                            </li>) 
                        })}
                </ul>  

                </div>



<div className='qwis__container-button'> 

{ index !== 0 && <Button funProps={back}>Назад</Button> }

  <Button funProps={next}>{index === questions.length-1 ? 'Узнать результат':'Дальше'}</Button> 

</div>



</div>

</>

  )
}
