import jwt from 'jsonwebtoken';
import { TOKEN_SECRET_KEY } from '../config.js';


/******************************************************/
//https://youtu.be/NmkY4JgS21A?t=3162
export function createAccessToken(payload) {

    return new Promise( (resolve, reject)=>{

        jwt.sign(

            payload,
    
            TOKEN_SECRET_KEY,
    
            { 
                expiresIn: '30d' 
            },
    
            (err, token) => {

                if (err) reject(err);

                resolve(token)
            }
            
        );

    } );

}
