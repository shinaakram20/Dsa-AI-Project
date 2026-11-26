import express from 'express';

const app = express();
const PORT = 3000;

app.use(express.json());

const tasks = [];
let nextId = 1;

app.get('/api/tasks', (req, res) => {
    res.json(tasks)
})

app.post('/api/tasks', (req, res) => {
    const { title } = req.body ?? {};
    if(!title) {
        return res.status(400).json({error: "Title is required"})
    }
    const task = {id: nextId++, title, done: false}
    tasks.push(task);
    res.status(200).json(task)
})

app.listen(PORT, () => {
    console.log("Server is running on port: ", PORT)
})
