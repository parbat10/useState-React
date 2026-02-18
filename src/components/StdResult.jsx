import React from 'react'

const StdResult = ({ stdData }) => {
  const name = (stdData.name)
  const mathMarks = (stdData.mathMarks)
  const scienceMarks = (stdData.scienceMarks)
  const physicsMarks = (stdData.physicsMarks)

  const mathStatus = mathMarks >= 30 ? "pass" : "fail";
  const scienceStatus = scienceMarks >= 28 ? "pass" : "fail";
  const physicsStatus = physicsMarks >= 28 ? "pass" : "fail";

  const overAllStatus = (mathStatus && scienceStatus && physicsStatus) == "pass" ? "pass" : "fail";

  const mathPercent = (stdData.mathMarks / 100) * 100;
  const sciencePercent = (stdData.scienceMarks / 75) * 100;
  const physicsPercent = (stdData.physicsMarks / 75) * 100;
  return (
    <>
      <div className='std-result'>
        <h3>Name={name}</h3>
        <p>Math={mathMarks} in percentage={mathPercent}% status={mathStatus}</p>
        <p>Science={scienceMarks} in percentage={sciencePercent}% status={scienceStatus}</p>
        <p>Physics={physicsMarks} in percentage={physicsPercent}% status={physicsStatus}</p>
        <p>OverAllStatus={overAllStatus}</p>
      </div>
    </>
  )
}

export default StdResult