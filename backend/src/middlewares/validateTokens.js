import jwt from 'jsonwebtoken';
import { TOKEN_SECRET_KEY } from '../config.js';

export const authRequired = (req, res, next) => {

    const  { token }  = req.cookies;

    if (!token) {
        return res.status(401).json({
            message: 'No autorizado. No existe un token'
        });
    }

    jwt.verify(token, TOKEN_SECRET_KEY, (err, user) => {

        if (err) {
            return res.status(401).json({
                message: 'No autorizado. El token es erroneo',
                error: err.message,
                token
            });
        }

        req.user = user;
        next();

    } )


};