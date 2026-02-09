import { useState } from 'react';

export default function Home() {
  const [carbs, setCarbs] = useState(0);
  const [protein, setProtein] = useState(0);
  const [fats, setFats] = useState(0);
  const [result, setResult] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('/api/macroNutrients', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ carbs, protein, fats }),
    });
    const data = await response.json();
    setResult(data);
  };

  return (
    <div>
      <h1>Macro Nutrient Calculator</h1>
      <form onSubmit={handleSubmit}>
        <input type='number' value={carbs} onChange={(e) => setCarbs(Number(e.target.value))} placeholder='Carbs' />
        <input type='number' value={protein} onChange={(e) => setProtein(Number(e.target.value))} placeholder='Protein' />
        <input type='number' value={fats} onChange={(e) => setFats(Number(e.target.value))} placeholder='Fats' />
        <button type='submit'>Calculate</button>
      </form>
      {result && <div>Carbs: {result.carbohydrates}, Protein: {result.proteins}, Fats: {result.fats}</div>}
    </div>
  );
}