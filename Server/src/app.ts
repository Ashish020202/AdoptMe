import express from "express";
import mongoose from "mongoose";
import dotenv from 'dotenv';


dotenv.config();
const app  = express();


app.use(express.json());

const MONGO_URI = process.env.MONGO_URI ||'';


const PORT = process.env.PORT || 5000;

// Routes
// app.use("/api/example", exampleRoutes);


mongoose.connect(MONGO_URI)
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('MongoDB connection error:', err));
    app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));

export default app;
