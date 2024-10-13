import 'dotenv/config'; 
import express from 'express';
import cors from 'cors'; 
import bodyParser from 'body-parser'; 
import connectToDatabase from './config/config';

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());
const PORT = process.env.PORT || 8000;
import userRoutes from './routes/userRoute';
import courseRoutes from './routes/courseRoute';





app.use('/api', userRoutes);
app.use('/api', courseRoutes);



app.listen(PORT, () => {
  connectToDatabase();
  console.log(`Server is running on http://localhost:${PORT}`);
});
