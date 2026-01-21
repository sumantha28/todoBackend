const Tasks = require("../models/task.model");

module.exports.getAllTasks = async (req, res) => {
    try {
        const response = await Tasks.find();

        res.status(200).json(response)
        
    } catch (err) {
        console.log(err);
    }
}

module.exports.createTasks = async (req, res) => {
  try {
    const { taskName, taskDesc } = req.body;

    const createdTask = await Tasks.create({
      TaskName: taskName,
      TaskDescription: taskDesc,
    });

    console.log(createdTask);

    res.status(200).json(`Created successfully`);
  } catch (err) {
    console.log(err);
  }
};

module.exports.updateTasks = async (req, res) => {
  try {
    const { taskName, taskDesc} = req.body;
    const response = await Tasks.findOne({ _id: req.params.id });

    if(!response) {
        return res.json(`No task found`);
    }

    await Tasks.updateOne({ _id: req.params.id }, {
        TaskName: taskName,
        TaskDesc: taskDesc 
    })

    res.status(200).json(`Updated successfully`);
  } catch (err) {
    console.log(err);
  }
};

module.exports.deleteTasks = async (req, res) => {
  try {
    await Tasks.deleteOne({ _id: req.params.id });

    res.status(200).json({ message: `Deleted successfully`});
  } catch (err) {
    console.log(err);
  }
};

