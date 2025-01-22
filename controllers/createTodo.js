const Todo = require("../models/Todo");

exports.createTodo = async (req, res) => {
  try {
    // fetch title and description from request body
    const { title, description } = req.body;

    // create Todo object and insert in db
    const response = await Todo.create({ title, description });

    res.status(200).json({
      success: true,
      data: response,
      message: "Entry Created Successfully",
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      data: "Internal Server Error",
      message: err.message,
    });
  }
};
