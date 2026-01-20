import { NextApiRequest, NextApiResponse } from 'next';

const educationalContent = {
  macronutrients: {
    carbohydrates: {
      definition: 'Carbohydrates are one of the three macronutrients and are the body’s main source of energy.',
      examples: ['Bread', 'Rice', 'Pasta']
    },
    proteins: {
      definition: 'Proteins are essential for building and repairing tissues, and they are a key component of enzymes and hormones.',
      examples: ['Meat', 'Fish', 'Eggs']
    },
    fats: {
      definition: 'Fats are a concentrated source of energy and are important for cell structure and hormone production.',
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