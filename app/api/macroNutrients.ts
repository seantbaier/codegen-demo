import { NextApiRequest, NextApiResponse } from 'next';

const calculateMacroNutrients = (carbs: number, protein: number, fats: number) => {
  return {
    carbohydrates: carbs,
    proteins: protein,
    fats: fats,
  };
};

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { carbs, protein, fats } = req.body;
    const result = calculateMacroNutrients(carbs, protein, fats);
    return res.status(200).json(result);
  }
  return res.status(405).json({ message: 'Method not allowed' });
}