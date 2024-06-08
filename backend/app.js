const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./db/database.js");
const authRouter = require("./routing/auth.js");

dotenv.config();

const app = express();
connectDB();
const port = process.env.APP_PORT || 5000;

//middlewares
app.use(cors({
    origin:["http://localhost:5173/"],
    credentials:true
}));
app.use(express.json())

app.use('/api/auth', authRouter);

app.listen(port, () => {
    console.log(`Server live at ${port}`);
});
