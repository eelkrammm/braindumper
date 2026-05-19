import dotenv from "dotenv";
dotenv.config();
import router from "./routes/router.js";
import express from "express";
import { dataBase } from "./config/db.js";
import rateLimiter from "./middleware/rateLimiter.js";
import cors from "cors";
import path from "path";

const app = express();
const PORT = process.env.PORT || 5001;
const __dirname = path.resolve();

if (process.env.NODE_ENV !== "production") {
  app.use(
    cors({
      origin: "http://localhost:5173",
    }),
  );
} else {
  app.use(cors());
}

app.use(express.json());
app.use(rateLimiter);
app.use("/api/notes", router);

await dataBase();

if (process.env.NODE_ENV === "production") {
  console.log("Running in production mode (Vercel)");
} else {
  app.listen(PORT, () => {
    console.log(`Server jalan di port ${PORT}`);
  });
}

export default app;
