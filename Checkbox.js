//checkbox example
import React, { useState } from 'react'

const Checkbox = () => {
    const [choose,setChoose]=useState([]);
    const handleChange=(e)=>{
        const skill=e.target.value;
        //to check if its checked then add it to the array
        if(e.target.checked){
            setChoose(prevList=>[...prevList,skill]);
        }
        //unchecked use filter and return not checked value
        else{
            setChoose(prevList=>prevList.filter((skills)=>skills!==skill))
        }
    }
  return (
    <div>
      <h1>choose your skills</h1>
      
      <label htmlFor='html'>
        <input type='Checkbox' id='html' value='html' 
        onChange={handleChange}/>Html
      </label>
      <label htmlFor='css'>
        <input type='Checkbox' id='css' value='css' 
        onChange={handleChange}/>Css
      </label>
      <label htmlFor='bootstrap'>
        <input type='Checkbox' id='bootstrap' value='bootstrap'
        onChange={handleChange}/>Bootstrap
      </label>
      <label htmlFor='html'>
        <input type='Checkbox' id='javascript' value='javascript' 
        onChange={handleChange}/>Javascript
      </label>
      <label htmlFor='reactjs'>
        <input type='Checkbox' id='reactjs' value='reactjs'
        onChange={handleChange}/>React Js
      </label>
      <h1>selected skills:</h1>
      <ul>
        {
            choose.map((skill,index)=>(
                <li key={index}>{skill}</li>
            ))
        }
      </ul>
    </div>
  )
}

export default Checkbox
