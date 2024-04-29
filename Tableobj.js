import React, { useState } from 'react'

const Tableobj = () => {
    const student=[
        {id:1,name:'abinaya',dep:"cse"},
    {id:2,name:"bhuvana",dep:"ece"},
    {id:3,name:"chandiga",dep:"ece"},
    {id:4,name:"dhivya",dep:"eee"},
    {id:5,name:"elakkiya",dep:"cse"}]
    const [list,setList]=useState(student)
  return (
    <div>
      <table style={{border:"2px solid black"}}>
        <thead>
        <tr>
            <th>id</th>
            <th>name</th>
            <th>dep</th>
        </tr>
        </thead>
        <tbody>
        {
            list.map((stu)=>(
                
                <tr key={stu.id}>
                    <td>{stu.id}</td>
                    <td>{stu.name}</td>
                    <td>{stu.dep}</td>
                    </tr>
                  
            ))
        }
          </tbody>
      </table>
    </div>
  )
}

export default Tableobj
