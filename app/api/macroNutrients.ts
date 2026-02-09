import { NextApiRequest, NextApiResponse } from 'next';

const calculateMacroNutrients = (carbs: number, protein: number, fats: number) => {
  const totalCalories = (carbs * 4) + (protein * 4) + (fats * 9);
  return {
    totalCalories,
    carbs,
    protein,
    fats
  };
};

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { carbs, protein, fats } = req.body;
    const result = calculateMacroNutrients(carbs, protein, fats);
    res.status(200).json(result);
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}