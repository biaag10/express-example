import express from "express";
import verifyToken from "../middlewares/jwt.token.middleware.js";  
import workoutController from "../controllers/workout.controller.js";

const router = express.Router();

router.use(verifyToken); // protege todas as rotas abaixo com o middleware de verificação de token

router.post('/register', verifyToken, workoutController.createWorkout); // cria um novo treino
router.get('/all-workouts', verifyToken, workoutController.getAllWorkouts); // busca todos os treinos do usuário
router.get('/get-workout-id/:id', verifyToken, workoutController.getWorkoutById); // busca um treino específico pelo ID
router.put('/update-all-workout/:id', verifyToken, workoutController.updateWorkout); // atualiza um treino específico pelo ID
router.patch('/update-workout/:id', verifyToken, workoutController.updateWorkout); // atualiza parcialmente um treino específico pelo ID
router.delete('/delete/:id', verifyToken, workoutController.deleteWorkout); // deleta um treino específico pelo ID

export default router;