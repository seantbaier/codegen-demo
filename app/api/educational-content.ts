import { NextApiRequest, NextApiResponse } from 'next';

const educationalContent = {
  macronutrients: {
    carbohydrates: {
      definition: 'Carbohydrates are one of the three macronutrients and are the body’s main source of energy.',
      examples: ['Bread', 'Rice', 'Fruits']
    },
    proteins: {
      definition: 'Proteins are essential for building and repairing tissues, and they play a crucial role in the body’s metabolic processes.',
      examples: ['Meat', 'Fish', 'Legumes']
    },
    fats: {
      definition: 'Fats are a concentrated source of energy and are necessary for the absorption of certain vitamins.',
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