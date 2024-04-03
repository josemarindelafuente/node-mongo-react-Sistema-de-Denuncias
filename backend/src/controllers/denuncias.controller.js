import Denuncia from '../models/denuncia.model.js';
 

/******************************************************************/
export const getDenuncias = async (req, res) => {

    const denuncias = await Denuncia.find({ user: req.user.id }).populate('user');

    res.json({
        message: 'Lista de mis denuncias',
        denuncias
    });
}
/******************************************************************/
export const createDenuncia = async (req, res) => {

    const { title, description } = req.body;

    const newDenuncia = new Denuncia({
        title,
        description,
        user: req.user.id
    });
    
    const savedDenuncia = await newDenuncia.save();

    res.json({ message: 'Denuncia creada', savedDenuncia });
    
}
/******************************************************************/
export const getDenuncia = async (req, res) => {
    
    const { id } = req.params;

    try{
        const denuncia = await Denuncia.findById(id).populate('user');
        
        if(!denuncia){
            return res.status(404).json({
                message: 'Denuncia no encontrada'
            });
        }

        res.json({
            message: 'Denuncia encontrada',
            denuncia
        });
        }catch(e){
            console.log(e);
            res.status(500).json({
                message: 'Algo salio mal'
            })
        } 

}
/******************************************************************/
export const deleteDenuncia = async (req, res) => {

    const { id } = req.params;

    const denuncia = await Denuncia.findByIdAndDelete(id);

    if (!denuncia) {
        return res.status(404).json({
            message: 'Denuncia no encontrada'
        });
    }

    res.send({message:'Se ha eliminado la denuncia'});
}
/******************************************************************/

export const updateDenuncia = async (req, res) => {

    const { id } = req.params;
    const updates = Object.keys(req.body);
    const allowedUpdates = ['estado'];
    const isValidOperation = updates.every((update) => allowedUpdates.includes(update));

    if(!isValidOperation){
        return res.status(400).json({
            message: 'Operacion invalida'
        });
    }
    
    // Buscar el registro por id y actualizarlo con los campos que se le pasan en el body
    const denuncia = await Denuncia.findByIdAndUpdate(id, req.body, { new: true, runValidators: true });

    if (!denuncia) {
        return res.status(404).json({
            message: 'Denuncia no encontrada'
        });
    } else {
        res.json({ message: 'Denuncia actualizada', denuncia });
    }
    
}
