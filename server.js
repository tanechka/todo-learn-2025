import express from 'express';
import cors from 'cors';

const app = express();

app.use(cors());
app.use(express.json());

const PORT = 5001;

let todos = [
    { id: '1', text: 'Learn Node.js', completed: false },
    { id: '2', text: 'Build REST API', completed: true }
];

app.get('/todos', (req, res) => {
    res.json(todos);
});

app.post('/todos', (req, res) => {
    const { text } = req.body;

    console.log(text)

    if (!text || typeof text !== 'string') {
        return res.status(400).json({ error: 'Text is required' });
    }

    const newTodo = {
        id: Date.now().toString(),
        text: text.trim(),
        completed: false,
        createdAt: new Date().toISOString()
    };

    todos.push(newTodo);
    res.status(201).json(newTodo);
});

app.patch('/todos/:id', (req, res) => {
    const { id } = req.params;
    const { completed } = req.body;
    const todo = todos.find(t => t.id === id);

    if (!todo) {
        return res.status(404).json({ error: "Задача не найдена" });
    }

    todo.completed = completed;
    res.status(200).json(todo);
});

app.delete('/todos/:id', (req, res) => {
    const { id } = req.params;
    const initialLength = todos.length;

    todos = todos.filter(todo => todo.id !== id);

    if (todos.length === initialLength) {
        return res.status(404).json({ error: "Todo not found" });
    }

    res.status(204).end();
});

app.listen(PORT, () => {
    console.log(`✅ Сервер запущен на http://localhost:${PORT}`);
});