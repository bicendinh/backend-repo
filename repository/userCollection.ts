import { firestore } from '@config/firebaseConfig';

// Example function to fetch users
export const getUsers = async () => {
  const usersSnapshot = await firestore.collection('users').get();
  return usersSnapshot.docs.map(doc => doc.data());
};
