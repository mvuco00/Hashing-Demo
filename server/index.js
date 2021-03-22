import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import hashRoutes from "./routes/hash.js";
import miningRoutes from "./routes/mine.js";

const app = express();
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use("/hash", hashRoutes);
app.use("/mine", miningRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));
