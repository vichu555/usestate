//radio example
import React, { useState } from 'react'

const Radio = () => {
    const [gender,setGender]=useState('')
  return (
    <div>
      <h1>Choose your Gender</h1>
        <label htmlFor='male'>
        <input type='radio' name='Male' value="male" checked={gender=='male'} onChange={(e)=>setGender(e.target.value)} id="male"/>Male</label>
        <label htmlFor='female'>
        <input type='radio' name='Female' value="female" onChange={(e)=>setGender(e.target.value)} id="female"
        checked={gender==='female'}/>Female
        </label>
        {<p>you selected {gender} gender</p>}
    </div>
  )
}

export default Radio
