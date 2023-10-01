import { connectToDatabase } from '../../utils/mongodb';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const { email, password } = req.body;

      // Validate email and password (replace with your validation logic)
      if (!email || !password) {
        return res.status(400).json({ message: 'Email and password are required' });
      }

      // Connect to MongoDB
      const { db } = await connectToDatabase();

      // Check if a user with the same email already exists
      const existingUser = await db.collection('users').findOne({ email });

      if (existingUser) {
        return res.status(400).json({ message: 'Email is already in use' });
      }

      // Insert user data into MongoDB (replace 'users' with your collection name)
      await db.collection('users').insertOne({ email, password });

      return res.status(200).json({ message: 'Registration successful' });
    } catch (error) {
      return res.status(500).json({ message: 'An error occurred' });
    }
  }

  return res.status(405).end();
}
