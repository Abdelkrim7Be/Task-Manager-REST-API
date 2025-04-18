const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      trim: true,
    },
    status: {
      type: String,
      required: true,
      enum: ["TODO", "IN_PROGRESS", "DONE", "ARCHIVED"],
      default: "TODO",
    },
    tasklist: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "TaskList",
      required: true,
    },
  },
  { timestamps: true }
);

module.exports + mongoose.model("Task", TaskSchema);
