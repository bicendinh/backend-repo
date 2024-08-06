import { Request, Response } from 'express';
import { firestore } from '@config/firebaseConfig';

// Example controller function
export const getUsers = async (req: Request, res: Response) => {
  try {
    const usersSnapshot = await firestore.collection('users').get();
    const users = usersSnapshot.docs.map(doc => doc.data());
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving users', error });
  }
};
