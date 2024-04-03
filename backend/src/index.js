import app from './app.js';
import {connectDB} from './db.js';

const port = process.env.PORT ?? 3000; 
// const port = process.env.PORT || 3000;

connectDB();

app.listen(port);

console.log('Server in running on port: ', port);