import { NextApiRequest, NextApiResponse } from 'next';

const educationalContent = {
  macronutrients: {
    carbohydrates: {
      definition: 'Carbohydrates are one of the three macronutrients and are a primary source of energy for the body.',
      examples: ['Bread', 'Rice', 'Fruits']
    },
    proteins: {
      definition: 'Proteins are essential for building and repairing tissues and are made up of amino acids.',
      examples: ['Meat', 'Fish', 'Eggs']
    },
    fats: {
      definition: 'Fats are a concentrated source of energy and are important for hormone production and nutrient absorption.',
      examples: ['Oils', 'Butter', 'Nuts']
    }
  }
};

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    res.status(200).json(educationalContent);
  } else {
    res.status(404).json({ message: 'Content not found' });
  }
}