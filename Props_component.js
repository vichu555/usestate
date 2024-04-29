import React from 'react'

const Props_component = ({name,title}) => {
  return (
    <div>
        <h6>props arrow example</h6>
      <h3>Title is {title}</h3>
      <p>username : {name}</p>
    </div>
  )
}
export default Props_component
