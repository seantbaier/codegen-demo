import { NextApiRequest, NextApiResponse } from 'next';

const educationalContent = {
  macronutrients: {
    carbohydrates: {
      definition: 'Carbohydrates are the body’s main source of energy.',
      examples: ['Bread', 'Rice', 'Pasta']
    },
    proteins: {
      definition: 'Proteins are essential for building and repairing tissues.',
      examples: ['Meat', 'Fish', 'Eggs']
    },
    fats: {
      definition: 'Fats are important for hormone production and nutrient absorption.',
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