import express from 'express'
import studentRoute from './src/routes/student'

const app = express();

app.use(express.json());

app.use('/api/student', studentRoute);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));