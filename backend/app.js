// File: server.mjs
import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();

const port = process.env.APP_PORT || 5000;

app.listen(port, () => {
    console.log(`Server live at ${port}`);
});
