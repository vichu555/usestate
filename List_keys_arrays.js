import React, { useState } from 'react'

const List_keys_arrays = () => {
    let to_do_list=["walking","practicing code","attending online class"];
    const [list,setList]=useState(to_do_list)
  return (
    <div>
        <h5>list and keys ,conditional rendering example</h5>
      {
        list.length > 0 ? (
            <ul>
                {
                    list.map((li,index)=>
                (<li key={index}>{li}</li>)
                )
                }
            </ul>
        ):(<h5>list is empty</h5>)
      }
    </div>
  )
}

export default List_keys_arrays
