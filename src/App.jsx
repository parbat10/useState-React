import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import DataInput from './components/DataInput'
import StdResult from './components/StdResult'

function App() {
  const [stdData,setStdData]=useState("");
  // console.log(stdData.mathMarks);
  return (
    <>
      <DataInput setStdData={setStdData}/>
      <StdResult stdData={stdData}/>
    </>
  )
}

export default App
