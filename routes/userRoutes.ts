import { Router } from "express";
import { getUsers, upsertUser, deleteUser } from "@controller/api";
import { authMiddleware } from "@middleware/authMiddleware";

const router = Router();

// Routes with authentication middleware
router.get("/fetch-user-data", authMiddleware, getUsers);
router.post("/update-user-data", authMiddleware, upsertUser);
router.delete("/delete-user-data/:id", authMiddleware, deleteUser);

export default router;
