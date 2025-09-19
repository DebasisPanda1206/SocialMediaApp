import express from "express"
import cors from "cors"
import dotenv from 'dotenv'

const app = express()
dotenv.config();
app.use(cors())
app.use(express.json())


app.post('/api/login', (req, res) => {
    const { email, password } = req.body;
    if (email === 'test@example.com' && password === '123456') {
        res.json({ message: 'Login successful', login: 'true' });
    } else {
        res.status(401).json({ error: 'Invalid credentials' });
    }
});

const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
    console.log("App is listening on port 5000");
})