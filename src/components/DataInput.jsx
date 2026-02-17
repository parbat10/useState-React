import React, { useState } from 'react'

const DataInput = ({setStdData}) => {
  const [name, setName] = useState("");
  const [mathMarks, setMathMarks] = useState("")
  const [scienceMarks, setScienceMarks] = useState("")
  const [physicsMarks, setPhysicsMarks] = useState("")
  function handleSubmit() {
    setStdData(
      {
        name:name,
        mathMarks:Number(mathMarks),
        scienceMarks:Number(scienceMarks),
        physicsMarks:Number(physicsMarks)
      }
    );
    setName("");
    setMathMarks("");
    setScienceMarks("");
    setPhysicsMarks("");
  }
  return (

    <>
      <h3>Student name:</h3>
      <input
        type="text"
        placeholder="Enter student's name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <h3>Math:</h3>
      <input 
        type="number"
        placeholder='marks'
        value={mathMarks}
        onChange={(e)=>setMathMarks(e.target.value)} 
      />
      <h3>Science:</h3>
      <input 
        type="number"
        placeholder='marks'
        value={scienceMarks}
        onChange={(e)=>setScienceMarks(e.target.value)}
      />
      <h3>Physics:</h3>
      <input 
        type="number"
        placeholder='marks'
        value={physicsMarks}
        onChange={(e)=>setPhysicsMarks(e.target.value)} 
      />
      <button onClick={handleSubmit}>Submit</button>
    </>
  )
}

export default DataInput