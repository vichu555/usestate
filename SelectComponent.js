import React, { useState } from 'react'

const SelectComponent = () => {
    const [selected,setSelected]=useState("");
    const handleChange=(e)=>{
        e.preventDefault();
        setSelected(e.target.value);
    }
  return (
    <div>
      <form>
        <label htmlFor="dis">Select Your district</label>
<select id="dis" onChange={handleChange} value={selected}>
    <option value="thanjavur">Thanjavur</option>
    <option value="trichy">Trichy</option>
    <option value="thiruvarur">Thiruvarur</option>
    <option value="pudukottai">Pudukottai</option>
    <option value="salem">Salem</option>
    <option value="namakkal">Nammakkal</option>
    </select>
      </form>
    {selected && <h1>Selected District is {selected}</h1>}

    </div>
  )
}

export default SelectComponent
