import express from 'express';
import cors from 'cors';

const app = express()
app.use(cors({
    origin: "http://localhost:5173", //dont use curly brackets inside paranthesis if you want to allow all domains to access
    //methods: ["GET", "POST"]
}))
const PORT = 5000


app.get('/notes', (req, res) => {
    res.send("hello world")
})

app.listen(PORT, () => {
    console.log(`App listening on http://localhost:${PORT}`)
})