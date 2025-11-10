import { useState } from 'react';

export default function Home() {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [gender, setGender] = useState('');
  const [age, setAge] = useState('');
  const [desiredWeightLoss, setDesiredWeightLoss] = useState('');
  const [results, setResults] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('/api/v1/calculate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ height, weight, gender, age, desiredWeightLoss }),
    });
    const data = await response.json();
    setResults(data);
  };

  const handleReset = () => {
    setHeight('');
    setWeight('');
    setGender('');
    setAge('');
    setDesiredWeightLoss('');
    setResults(null);
  };

  return (
    <div>
      <h1>Macro Calculator</h1>
      <form onSubmit={handleSubmit}>
        <input type='number' value={height} onChange={(e) => setHeight(e.target.value)} placeholder='Height (cm)' required />
        <input type='number' value={weight} onChange={(e) => setWeight(e.target.value)} placeholder='Weight (kg)' required />
        <select value={gender} onChange={(e) => setGender(e.target.value)} required>
          <option value=''>Select Gender</option>
          <option value='male'>Male</option>
          <option value='female'>Female</option>
        </select>
        <input type='number' value={age} onChange={(e) => setAge(e.target.value)} placeholder='Age' required />
        <input type='number' value={desiredWeightLoss} onChange={(e) => setDesiredWeightLoss(e.target.value)} placeholder='Desired Weight Loss (kg)' required />
        <button type='submit'>Calculate</button>
        <button type='button' onClick={handleReset}>Reset</button>
      </form>
      {results && <div>Results: {JSON.stringify(results)}</div>}
    </div>
  );
}