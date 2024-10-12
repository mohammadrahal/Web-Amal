import mongoose from 'mongoose';

const MONGO_URL: string = process.env.MONGO_URL || '';

async function connectToDatabase(): Promise<void> {
  try {
    await mongoose.connect(MONGO_URL);
    console.log('Connected to the database');
  } catch (error) {
    console.error('Error connecting to the database:', error);
  }
}

export default connectToDatabase;
