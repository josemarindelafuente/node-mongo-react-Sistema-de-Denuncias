import User from '../models/user.model.js';
import bcrypt from "bcryptjs";
import { createAccessToken } from '../libs/jwt.js';


/*------------------------------------------------------------------------------------*/
export const register = async (req, res) => {
    //console.log(req.body); 
    //tengo que usar app.use(express.json()); para poder entender el request body, sino esto se muestra como undefined  
    //https://youtu.be/NmkY4JgS21A?t=1895

    if (!req.body || !req.body.username || !req.body.email || !req.body.password) {
        return res.status(400).json({
            message: 'username, email and password are required'
        })
    }

    

    try {
                const { username, password, email } = req.body; 
                const passwordHash = await bcrypt.hash(password, 10);

                const newUser = new User({
                    username,
                    password: passwordHash,
                    email
                });
            
                const userSaved = await newUser.save(); 
                
                const token =await createAccessToken({ id: userSaved._id });
                //https://youtu.be/NmkY4JgS21A?t=3162

                res.cookie('token', token);
                res.json({
                    message: 'Usuario registrado satisfactoriamente',
                    id: userSaved._id,
                    username: userSaved.username,
                    email: userSaved.email,                        
                })

        
    } catch (error) {
        res.status(500).json({ message: error.message });
    } 

}
/*------------------------------------------------------------------------------------*/
export const login = async (req, res) => {

    if (!req.body || !req.body.email || !req.body.password) {
        return res.status(400).json({
            message: 'Email and password are required from the login form'
        })
    }

    const { password, email } = req.body; 

    try {

                const userFound = await User.findOne({ email });

                if (!userFound) {
                    return res.status(400).json({
                        message: 'Usuario no encontrado'
                    })
                }
            
                const isMatch = await bcrypt.compare(password, userFound.password);

                if (!isMatch) {
                    return res.status(400).json({
                        message: 'Los datos ingresados no son correctos'
                    });
                }

                const token =await createAccessToken({ id: userFound._id });

                res.cookie('token', token);
                res.json({
                    message: 'Usuario logeado satisfactoriamente',
                    id: userFound._id,
                    email: userFound.email,                        
                });
        
    } catch (error) {
        res.status(500).json({ "message": error.message });
    } 

}
/*------------------------------------------------------------------------------------*/
export const logout = async (req, res) => {
    res.clearCookie('token');
    res.status(200).json({"message":"Session cerrada"});
}
/*------------------------------------------------------------------------------------*/

export const profile = async (req, res) => {

    const userFound = await User.findById(req.user.id); //IMPORTANTE EL AWAIT

    if (!userFound) {
        return res.status(400).json({
            message: 'Usuario no encontrado'
        })
    }
    
    //req.user viene cargado del middleware cuando valida el token. estos datos son los que estan en el payload del token
    res.json(
        { 
            'message' : 'Acceso al area de perfil de usuario',
            'user_desde_el_payload_token' : req.user,
            userFound
        });

}
/*------------------------------------------------------------------------------------*/

