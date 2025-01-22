const Todo = require("../models/Todo");

exports.updateTodo = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description } = req.body;
    const response = await Todo.findByIdAndUpdate(
      { _id: id },
      { title, description, updatedAt: Date.now() }
    );

    if (!response) {
      return res.status(404).json({
        success: false,
        message: "Id not found",
      });
    }

    res.status(200).json({
      success: true,
      data: response,
      message: "Data updated Successfully",
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      error: err.message,
      message: "Server Error",
    });
  }
};
