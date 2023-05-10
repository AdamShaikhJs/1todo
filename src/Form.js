import React,{useState} from 'react'

export default function Form({addItem,name,setName}) {
    const handleSubmit =()=>{
        addItem(name)  //child to parent
        setName("")
    }
  return (
    <div>
      <input value={name}  onChange={(e)=>setName(e.target.value)} /> 
      <button onClick={handleSubmit} className='btn'>submit</button>
    </div>
  )
}
