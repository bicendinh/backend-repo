import { Request, Response } from "express";
import { firestore } from "@config/firebaseConfig";

export const getUsers = async (req: Request, res: Response) => {
  try {
    const usersSnapshot = await firestore.collection("users").get();
    const users = usersSnapshot.docs.map((doc) => doc.data());
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: "Error retrieving users", error });
  }
};

export const upsertUser = async (req: Request, res: Response) => {
  try {
    const userData = req.body;
    const userId = userData?.id;

    if (!userData) {
      return res
        .status(400)
        .json({ message: "User ID and user data are required" });
    }

    let userRef;

    if (userId) {
      userRef = firestore.collection("users").doc(userId);
    } else {
      userRef = firestore.collection("users").doc();
      userData.id = userRef.id;
    }

    // Upsert the user document
    await userRef.set(userData, { merge: true });

    res.status(200).json({ message: "User upserted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error upserting user", error });
  }
};

export const deleteUser = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const userDoc = firestore.collection("users").doc(id);
    const userSnapshot = await userDoc.get();

    if (!userSnapshot.exists) {
      return res.status(404).json({ message: "User not found" });
    }

    await userDoc.delete();
    res.status(200).json({ message: "User deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting user", error });
  }
};
