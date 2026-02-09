import { NextApiRequest, NextApiResponse } from 'next';

const educationalContent = {
  macronutrients: {
    carbohydrates: {
      definition: 'Carbohydrates are one of the three macronutrients, providing energy to the body.',
      examples: ['Rice', 'Bread', 'Fruits']
    },
    proteins: {
      definition: 'Proteins are essential for building and repairing tissues.',
      examples: ['Meat', 'Fish', 'Legumes']
    },
    fats: {
      definition: 'Fats are a concentrated source of energy and are vital for cell function.',
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