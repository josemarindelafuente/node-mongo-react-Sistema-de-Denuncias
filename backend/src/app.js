import express, { json } from 'express';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';
import cors from 'cors';

import authRoutes from './routes/auth.routes.js';
import tasksRoutes from './routes/tasks.routes.js';
import denunciasRoutes from './routes/denuncias.routes.js';

const app = express();
app.disable('x-powered-by');

app.use(morgan('dev'));
//https://www.npmjs.com/package/morgan
//app.use(morgan('combined'));

app.use( cors() ); // https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS

app.use( cookieParser() ); // convertir una cookie en un objeto json

app.use( express.json(
    { limit: '50mb' }
) );
//https://keepcoding.io/blog/metodo-de-respuesta-json-en-express-js/

app.use('/api', authRoutes); // add prefix /api
app.use('/api', tasksRoutes); // add prefix /api
app.use('/api', denunciasRoutes); // add prefix /api

export default app;