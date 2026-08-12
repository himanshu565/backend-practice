import express from 'express'
import authroute from './routes/auth.js'
import userRoutes from './routes/user.js'
const app = express()
app.use(express.json());

app.use("/api/auth", authroute);
app.use("/api/user", userRoutes);

const PORT= process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello World')
})

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`)
})