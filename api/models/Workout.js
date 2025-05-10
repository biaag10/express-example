import mongoose from "mongoose";

const seriesSchema = new mongoose.Schema({
    reps: {
        type: Number,
        required: true,
    },
    weight: {
        type: Number,
        required: true,
    },
});

const exerciseSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    series: [seriesSchema],
});

const workoutSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    exercises: {
        type: [exerciseSchema],
        required: true,
        validate: [arr => arr.length > 0, 'Pelo menos um exercício é obrigatório']
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

export default mongoose.model('Workout', workoutSchema);