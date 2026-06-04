import express from "express";
import Note from "./models/note.model.js";

const app = express();

app.use(express.json());

// Post the notes
app.post("/notes", async (req, res) => {
  const data = req.body;
  await Note.create({
    title: data.title,
    description: data.description,
    createdAt: data.createdAt,
  });
  res.status(201).json({
    message: "notes created successfully",
  });
});

// Get the notes
app.get("/notes", async (req, res) => {
  const notes = await Note.find();

  res.status(200).json({
    message: "notes fetched  successfully",
    notes: notes,
  });
});

// delete the notes
app.delete("/notes/:id", async (req, res) => {
  const id = req.params.id;
  await Note.findByIdAndDelete(id);
  res.status(200).json({
    message: "notes deleted  successfully",
  });
});

// updates the notes
app.patch("/notes/:id", async (req, res) => {
  const id = req.params.id;
  const description = req.body.description;
  await Note.findByIdAndUpdate(id, { description: description });
  res.status(200).json({
    message: "notes updated successfully",
  });
});

export default app;
