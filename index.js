import express from 'express';
import bodyParser from 'body-parser';

import usersRoutes from './routes/users.js';

const app = express();
const PORT = 5002;

app.use(bodyParser.json());

// All routes starting with users.
app.use('/users', usersRoutes);

app.get('/', (req, res) => {
    res.send('Hello from Homepage')
})

app.listen(PORT, () => console.log(`Server Running in port: http://localhost:${PORT}`));