import Workout from "../models/Workout.js";

const createWorkout = async (userId, title, exercises) => {
    return Workout.create({
        userId,
        title,
        exercises
    });
}

const getAllWorkouts = async (userId) => {
    return Workout.find({ userId });
}

const getWorkoutById = async (id, userId) => {
    return Workout.findOne({ _id: id, userId });
}

const updateWorkout = async (id, userId, data) => {
    return Workout.findOneAndUpdate(
        { _id: id, userId },
        data,
        { new: true }
    );
}

const removeWorkout = async (id, userId) => {
    return Workout.findOneAndDelete({ _id: id, userId });
}

export default {
    createWorkout,
    getAllWorkouts,
    getWorkoutById,
    updateWorkout,
    removeWorkout
};
