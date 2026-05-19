import Task from "../models/Task.js";

// Get All Tasks
export const getTasks = async (
  req,
  res
) => {

  try {

    const tasks =
      await Task.find();

    res.json(tasks);

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }
};

// Create Task
export const createTask = async (
  req,
  res
) => {

  try {

    const {
      title,
      priority,
      status,
      date,
    } = req.body;

    const task =
      await Task.create({
        title,
        priority,
        status,
        date,
      });

    res.status(201).json(task);

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }
};

// Delete Task
export const deleteTask = async (
  req,
  res
) => {

  try {

    const task =
      await Task.findById(
        req.params.id
      );

    if (!task) {

      return res
        .status(404)
        .json({
          message:
            "Task not found",
        });

    }

    await task.deleteOne();

    res.json({
      message:
        "Task deleted",
    });

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }
};

// Complete Task
export const completeTask =
  async (req, res) => {

    try {

      const task =
        await Task.findById(
          req.params.id
        );

      if (!task) {

        return res
          .status(404)
          .json({
            message:
              "Task not found",
          });

      }

      task.status =
        "Completed";

      const updatedTask =
        await task.save();

      res.json(updatedTask);

    } catch (error) {

      res.status(500).json({
        message: error.message,
      });

    }
  };