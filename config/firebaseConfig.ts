import * as admin from 'firebase-admin';

// Initialize Firebase Admin SDK
admin.initializeApp({
  credential: admin.credential.applicationDefault(),
  databaseURL: "http://localhost:9000?ns=your-project-id" // Update with your project ID
});

const firestore = admin.firestore();
const auth = admin.auth();

export { firestore, auth };
