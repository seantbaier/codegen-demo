export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { height, weight, gender, age, desiredWeightLoss } = req.body;
    // Simple calculation logic (to be refined)
    const proteins = (weight * 2.2) * 0.3;
    const fats = (weight * 2.2) * 0.2;
    const carbohydrates = (weight * 2.2) * 0.5;
    res.status(200).json({ carbohydrates, proteins, fats });
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}