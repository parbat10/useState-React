import React from 'react'

const StdResult = ({stdData}) => {
  const name=(stdData.name)
  const mathMarks=(stdData.mathMarks)
  const scienceMarks=(stdData.scienceMarks)
  const physicsMarks=(stdData.physicsMarks)

  const mathPercent=(stdData.mathMarks/100)*100;
  const sciencePercent=(stdData.scienceMarks/75)*100;
  const physicsPercent=(stdData.physicsMarks/75)*100;
  return (
    <>
    <h3>Name={name}</h3>
    <p>Math={mathMarks} in percentage={mathPercent}%</p>
    <p>Science={scienceMarks} in percentage={sciencePercent}%</p>
    <p>Physics={physicsMarks} in percentage={physicsPercent}%</p>
    </>
  )
}

export default StdResult