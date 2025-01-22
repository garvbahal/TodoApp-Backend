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
