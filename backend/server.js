import express from "express"
import cors from "cors"

const app = express()

app.use(cors({ origin: process.env.CORS_ORIGIN }))
app.use(express.json())

app.post('/api/login', (req, res) => {
    const { email, password } = req.body;
    if (email === 'test@example.com' && password === '123456') {
        res.json({ message: 'Login successful', login: 'true' });
    } else {
        res.status(401).json({ error: 'Invalid credentials' });
    }
});

const PORT = process.env.PORT
app.listen(PORT, () => {
    console.log("App is listening on port 5000");
})