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






app.use('/v0', userRoutes);




app.listen(PORT, () => {
  connectToDatabase();
  console.log(`Server is running on http://localhost:${PORT}`);
});
