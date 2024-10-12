import mongoose, { Schema, Document, Model } from 'mongoose';

// Define a TypeScript interface representing the User document
interface IUser extends Document {
  fullName: string;
  phoneNumber: string;
  email: string;
  password: string;
  role: string;
}

// Define the User schema
const UserSchema: Schema = new Schema({
  fullName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  role: { type: String, default: 'user' },
});

// Create the User model with a type
const User: Model<IUser> = mongoose.model<IUser>('User', UserSchema);

// Export the User model
export default User;
