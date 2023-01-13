import { Router } from "express";
import userRoutes from "./users.js";

const router = Router();

router.get("/", (req, res) => {
    res.send("This is the api root!");
});

router.use("/users", userRoutes);

export default router;