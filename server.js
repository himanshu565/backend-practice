import express from 'express'
import authroute from './routes/auth.js'
import userRoutes from './routes/user.js'
import "dotenv/config";

const app = express();

app.use(express.json());

app.use("/api/auth", authroute);
app.use("/api", userRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
 console.log(`Server running on port ${PORT}`);
});