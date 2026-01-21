const mongoose = require("mongoose");
const TaskSchema = mongoose.Schema(
  {
    TaskName: {
      type: String,
    },
    TaskDescription: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Tasks", TaskSchema);
