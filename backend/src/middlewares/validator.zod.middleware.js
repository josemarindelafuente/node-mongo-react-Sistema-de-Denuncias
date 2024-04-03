export const validateZodSchema = (schema) => (req, res, next) => {
//https://youtu.be/NmkY4JgS21A?t=6513
    try {
        schema.parse(req.body);
        next();
    } catch (error) {
        return res.status(400).json({ message: error.errors.map((err) => err.message) });
        //https://youtu.be/NmkY4JgS21A?t=6734
    }
    
}