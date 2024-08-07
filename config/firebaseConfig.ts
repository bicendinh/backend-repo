import * as admin from "firebase-admin";
import "dotenv/config";

// Initialize Firebase Admin SDK
const serviceAccount = require(process.env.KEY_SERVICE_ACCOUNT_JSON as string);

// Initialize Firebase Admin SDK
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: process.env.DATABASE_URL,
  storageBucket: process.env.STORAGE_BUCKET,
});

const firestore = admin.firestore();
const auth = admin.auth();

export { firestore, auth };
