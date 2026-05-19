import express from "express"; 
import { getAllNotes, createNote, updateNote, deleteNote, getNoteById} from "../controllers/notesControllers.js";
const app = express.Router(); 

app.get("/", getAllNotes);
app.get("/:id", getNoteById);
app.post("/", createNote);
app.put("/:id", updateNote); 
app.delete("/:id", deleteNote);

export default app