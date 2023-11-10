import React, { useState } from 'react';

const AgeCalculator = () => {
  const [birthDate, setBirthDate] = useState('');
  const [age, setAge] = useState('');

  const calculateAge = () => {
    const today = new Date();
    const birthDateObj = new Date(birthDate);

    const yearsDiff = today.getFullYear() - birthDateObj.getFullYear();
    const monthsDiff = today.getMonth() - birthDateObj.getMonth();
    const daysDiff = today.getDate() - birthDateObj.getDate();

    let calculatedAge = yearsDiff;

    if (monthsDiff < 0 || (monthsDiff === 0 && daysDiff < 0)) {
      calculatedAge--;
    }

    setAge(calculatedAge);
  };

  return (
    <div>
      
      <div>
        <label htmlFor="birthdate">Enter your birthdate:</label>
        <br/>
        <input
          type="date"
          id="birthdate"
          value={birthDate}
          onChange={e => setBirthDate(e.target.value)}
        />
      </div>
      <button onClick={calculateAge}>Calculate Age</button>
      {age !== '' && <p> Your age is: {age} </p>}
    </div>
  );
};

export default AgeCalculator;
