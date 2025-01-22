const Todo = require("../models/Todo");

exports.getTodos = async (req, res) => {
  try {
    const todos = await Todo.find({});

    res.status(200).json({
      success: true,
      data: todos,
      message: "Entire todo data is fetched",
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      success: false,
      data: err.message,
      message: "Server error",
    });
  }
};

exports.getTodoById = async (req, res) => {
  try {
    const id = req.params.id;
    const response = await Todo.findById({ _id: id });

    if (!response) {
      return res.status(404).json({
        success: false,
        message: "No data found for given Id",
      });
    }
    res.status(200).json({
      success: true,
      data: response,
      message: `Todo ${id} data successfully fetched`,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};
