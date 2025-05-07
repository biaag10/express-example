import workoutService from "../services/workout.service.js";

const dateLocal = () => {
    const local = new Date().toLocaleString('en-US', { timeZone: 'America/Sao_Paulo' });
    return new Date(local);
  };
  

const createWorkout = async (req, res) => {
    try {
        const { title, exercises } = req.body;
        const createdAt = dateLocal();
        const workout = await workoutService.createWorkout(req.userId, title, exercises);
        res.status(201).json(workout);
    }
    catch (error) {
        res.status(400).json({ message: 'Erro ao criar treino: ' + error.message });
    }
}

const getAllWorkouts = async (req, res) => {
    const workouts = await workoutService.getAllWorkouts(req.userId);
    res.status(200).json(workouts);
}

const getWorkoutById = async (req, res) => {
    const workout = await workoutService.getWorkoutById(req.params.id, req.userId);
    if (!workout) {
        return res.status(404).json({ message: 'Treino não encontrado' });
    }
    res.status(200).json(workout);
}   

const updateWorkout = async (req, res) => {
    const workout = await workoutService.updateWorkout(req.params.id, req.userId, req.body);
    if (!workout) {
        return res.status(404).json({ message: 'Treino não encontrado ou sem permissão' });
    }
    res.status(200).json(workout);  
}

const deleteWorkout = async (req, res) => {
    const workout = await workoutService.removeWorkout(req.params.id, req.userId);
    if (!workout) {
        return res.status(404).json({ message: 'Treino não encontrado ou sem permissão' });
    }
    res.status(200).json({ message: 'Treino deletado com sucesso' });
}

export default {
    createWorkout,
    getAllWorkouts,
    getWorkoutById,
    updateWorkout,
    deleteWorkout
};