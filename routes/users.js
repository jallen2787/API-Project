import { Router } from "express";
import * as controllers from "../controllers/users.js";

const router = Router();

router.get("/", controllers.getUsers);
router.get('/id/:id', controllers.getUser);
router.post("/", controllers.createUser);
router.put('/id/:id', controllers.updateUser);
router.delete('/id/:id', controllers.deleteUser);

export default router;