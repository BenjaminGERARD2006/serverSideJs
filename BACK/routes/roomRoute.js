import express from "express";
import * as controller from "../controllers/roomController.js";
import authCheck from "../middleware/auth-middleware.js";

const router = express.Router();

router.get("/", authCheck, controller.getAllRooms);
router.get("/:id", authCheck, controller.getRoomById);
router.post("/", authCheck, controller.createRoom);
router.put("/:id", authCheck, controller.updateRoom);
router.delete("/:id", authCheck, controller.deleteRoom);

export default router;