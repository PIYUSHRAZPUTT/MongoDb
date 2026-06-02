import mongoose from "mongoose";
import taskSchema from "./modules/task.js";

const run = async () => {
  try {
    // connect database
    await mongoose.connect("mongodb://localhost:27017/taskManager");
    console.log("Mongoose connect successfully");

    // create task
    const Task = mongoose.model("Task", taskSchema);
    const task = Task({
      title: "Mongoose",
      description: "Learn what is mongoose",
      dueDate: new Date("2026-05-29"),
    });
    // await task.save();

    // find the documents
    const findTask = await Task.find();
    console.log(`Find all task ${findTask}`);

    // uptade the documents
    const updatedTask = await Task.findOneAndUpdate(
      { title: "Mongoose" },
      { completed: true },
      { new: true, runValidators: true },
    );
    console.log("Updated Task : ", updatedTask);

    // delete the document
    const deletedDocument = await Task.findOneAndDelete({ title: "Mongoose" });
    console.log("Deleted Document", deletedDocument);

  } catch (err) {
    console.log(err.message);
  } finally {
    const disconnect = await mongoose.disconnect();
    console.log("Mongoose Disconnect successfully");
  }
};

run();
