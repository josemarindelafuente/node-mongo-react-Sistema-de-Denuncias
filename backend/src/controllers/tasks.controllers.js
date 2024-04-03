import Task from "../models/task.model.js";

export const getTasks = async (req, res) => {
  const tasks = await Task.find({
    user: req.user.id
  }).populate('user');
  
  res.json({
    message: "Listado de tareas",
    tasks: tasks,
  });
};
/******************************************************************/

export const createTask = async (req, res) => {
  const { title, description, date } = req.body;

  const newTask = new Task({ 
    title, 
    description, 
    date, 
    user: req.user.id 
});

  const savedTask = await newTask.save();

  res.json({ message: "Tarea creada", savedTask });
};
/******************************************************************/

export const getTask = async (req, res) => {
  const { id } = req.params;
  const taskFound = await Task.findById(id).populate('user');

  if (!taskFound) {
    return res.status(400).json({
      message: "Tarea no encontrada",
    });
  }

  res.json({ message: "Mostrar una tarea", taskFound });
};
/******************************************************************/

export const updateTask = async (req, res) => {
  const { id } = req.params;
  const taskUpdated = await Task.findByIdAndUpdate(id, req.body, { new: true });

  if (!taskUpdated) {
    return res.status(400).json({
      message: "Tarea no encontrada",
    });
  }

  res.json({ message: "Tarea actualizada", taskUpdated });
};
/******************************************************************/

export const deleteTask = async (req, res) => {
  const { id } = req.params;
  const taskDeleted = await Task.findByIdAndDelete(id);
  if (!taskDeleted) {
    return res.status(400).json({
      message: "Tarea no encontrada",
    });
  }

  return res.sendStatus(204);
  //res.json({ message: "Tarea eliminada", taskDeleted });
};
/******************************************************************/
