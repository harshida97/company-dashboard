import mongoose from 'mongoose';

const connectDb = async () => {
  try {
    //  MongoDB URL 
    const conn = await mongoose.connect(process.env.MONGODB_URL);

    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    // Proper error handling for API/Database failures 
    console.error(`Error: ${error.message}`);
    process.exit(1); 
  }
};

export default connectDb;