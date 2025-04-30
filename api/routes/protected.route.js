import express from "express";
import protectedRouteController from "../controller/protected.controller.js";
import verifyToken from "../middleware/jwt.token.middleware.js";  

const router = express.Router();

router.get('/protected', verifyToken, protectedRouteController.protectedRoute);

export default router;