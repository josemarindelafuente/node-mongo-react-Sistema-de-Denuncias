import mongoose from 'mongoose';
import { MONGO_URI } from './config.js';

export const connectDB = async () => {
    try {
        
        const mongo_uri = process.env.MONGO_URI || MONGO_URI;

        const conn = await mongoose.connect(mongo_uri);

        console.log(`MongoDB is connected on: ${conn.connection.host} on port: ${conn.connection.port}`);

    } catch (err) {
        console.error(err);
        process.exit(1);
    }
}