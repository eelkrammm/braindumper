import Note from "../models/Note.js";

export const getAllNotes = async (req, res) => {
  try {
    const notes = await Note.find().sort({ created: -1 });
    res.status(200).json(notes);
  } catch (error) {
    res.status(500).json({ note: "server error" });
  }
};

export const createNote = async (req, res) => {
  try {
    const { title, content } = req.body;
    const newNote = new Note({ title, content });
    await newNote.save();
    res.status(200).json(newNote);
  } catch (error) {
    console.error(error);
    res.status(500).json({ note: "error saat menyimpan catatan baru" });
  }
};

export const updateNote = async (req, res) => {
  try {
    const { title, content } = req.body;
    const note = await Note.findByIdAndUpdate(req.params.id, {
      title,
      content,
    });
    res.status(200).json(note);
  } catch (error) {
    console.error(error);
    res.status(500).send("cannot update note");
  }
};

export const deleteNote = async (req, res) => {
  try {
    const deletedNote = await Note.findByIdAndDelete(req.params.id);
    if (!deletedNote) return res.status(404).send("Note tidak ada");
    res.status(200).json(deletedNote);
  } catch (error) {
    console.error("error", error);
    res.status(500).json({ massage: "internal server error" });
  }
};

export const getNoteById = async (req, res) => {
  try {
    const gotNoteById = Note.findById(req.params.id);
    if (!getNoteById) return res.status(404).send("Note tidak ditemukan");
    res.status(200).json(getNoteById);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};
