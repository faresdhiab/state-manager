import React, { useState } from 'react'

const AddItem = ({addItem}) => {
    const [item, setItem] =useState("")
    const handleChange = (e) => {
        setItem(e.target.value)
    }
  return (
    <div>
        <form id="myDIV">
        <h2 className='title' style={{margin:"5px"}}>Add Item</h2>
        <input placeholder='Add todo ..' type="text" onChange={handleChange} id="myInput"/>
        </form>
        
       
        <button onClick={(e) =>{e.preventDefault();
             addItem(item)
             setItem("") }}> Add</button>
    </div>

  )
}

export default AddItem