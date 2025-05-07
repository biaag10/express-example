import workoutService from "../services/workout.service.js";

const dateLocal = () => {
    const local = new Date().toLocaleString('en-US', { timeZone: 'America/Sao_Paulo' });
    return new Date(local);
};

const createWorkout = async (req, res) => {
    try {
        console.log(`[CREATE WORKOUT] Iniciando criação de treino - User ID: ${req.userId}`);
        const { title, exercises } = req.body;
        const createdAt = dateLocal();
        console.log(`[CREATE WORKOUT] Dados recebidos: Title: ${title}, Exercises: ${JSON.stringify(exercises)}, CreatedAt: ${createdAt}`);

        const workout = await workoutService.createWorkout(req.userId, title, exercises, createdAt);
        console.log(`[CREATE WORKOUT] Treino criado com sucesso - ID: ${workout.id}`);
        
        res.status(201).json(workout);
    } catch (error) {
        console.error(`[CREATE WORKOUT] Erro ao criar treino: ${error.message}`);
        res.status(400).json({ message: 'Erro ao criar treino: ' + error.message });
    }
};

const getAllWorkouts = async (req, res) => {
    console.log(`[GET ALL WORKOUTS] Buscando treinos - User ID: ${req.userId}`);
    try {
        const workouts = await workoutService.getAllWorkouts(req.userId);
        console.log(`[GET ALL WORKOUTS] ${workouts.length} treino(os) encontrado(os)`);
        res.status(200).json(workouts);
    } catch (error) {
        console.error(`[GET ALL WORKOUTS] Erro: ${error.message}`);
        res.status(500).json({ message: 'Erro ao buscar treinos' });
    }
};

const getWorkoutById = async (req, res) => {
    console.log(`[GET WORKOUT] Buscando treino - ID: ${req.params.id}, User ID: ${req.userId}`);
    try {
        const workout = await workoutService.getWorkoutById(req.params.id, req.userId);
        if (!workout) {
            console.warn(`[GET WORKOUT] Treino não encontrado ou acesso negado`);
            return res.status(404).json({ message: 'Treino não encontrado ou usuário sem permissão' });
        }
        console.log(`[GET WORKOUT] Treino encontrado - ID: ${workout.id}`);
        res.status(200).json(workout);
    } catch (error) {
        console.error(`[GET WORKOUT] Erro: ${error.message}`);
        res.status(500).json({ message: 'Erro ao buscar treino' });
    }
};

const updateWorkout = async (req, res) => {
    console.log(`[UPDATE WORKOUT] Atualizando treino - ID: ${req.params.id}, User ID: ${req.userId}`);
    try {
        const workout = await workoutService.updateWorkout(req.params.id, req.userId, req.body);
        if (!workout) {
            console.warn(`[UPDATE WORKOUT] Treino não encontrado ou acesso negado`);
            return res.status(404).json({ message: 'Treino não encontrado ou usuário sem permissão' });
        }
        console.log(`[UPDATE WORKOUT] Treino atualizado com sucesso - ID: ${workout.id}`);
        res.status(200).json(workout);
    } catch (error) {
        console.error(`[UPDATE WORKOUT] Erro: ${error.message}`);
        res.status(500).json({ message: 'Erro ao atualizar treino' });
    }
};

const deleteWorkout = async (req, res) => {
    console.log(`[DELETE WORKOUT] Deletando treino - ID: ${req.params.id}, User ID: ${req.userId}`);
    try {
        const workout = await workoutService.removeWorkout(req.params.id, req.userId);
        if (!workout) {
            console.warn(`[DELETE WORKOUT] Treino não encontrado ou acesso negado`);
            return res.status(404).json({ message: 'Treino não encontrado ou usuário sem permissão' });
        }
        console.log(`[DELETE WORKOUT] Treino deletado com sucesso - ID: ${req.params.id}`);
        res.status(200).json({ message: 'Treino deletado com sucesso' });
    } catch (error) {
        console.error(`[DELETE WORKOUT] Erro: ${error.message}`);
        res.status(500).json({ message: 'Erro ao deletar treino' });
    }
};

export default {
    createWorkout,
    getAllWorkouts,
    getWorkoutById,
    updateWorkout,
    deleteWorkout
};
