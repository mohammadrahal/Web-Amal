import mongoose, { Schema, Document, Model } from "mongoose";

// Define a TypeScript interface representing the User document
interface ICourse extends Document {
  courseNmae: string;
  duration: number;
  type: string;
  additionalInfo: {
    description: string;
    instructors: mongoose.Types.ObjectId[];
    materials: { title: string; content: string }[];
  };
}

// Define the User schema
const courseSchema: Schema = new Schema({
    courseName: { type: String, required: true },
    duration: { type: Number, required: true },
    type: { type: String, required: true },
    additionalInfo: {
      description: { type: String },
      instructors: [{ type: Schema.Types.ObjectId, ref: "Instructor" }],
      materials: [{ title: String, content: String }]
    }
  });
  

// Create the User model with a type
const Course: Model<ICourse> = mongoose.model<ICourse>("Course", courseSchema);

// Export the User model
export default Course;
