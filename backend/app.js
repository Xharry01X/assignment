const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./db/database.js");
const authRouter = require("./routing/auth.js");
const imageRouter = require( "./routing/images.js" );
const errorHandler = require( "./middlewares/errorHandler.js" );
const cookieParser = require( "cookie-parser" );

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
app.use(cookieParser())
app.use(errorHandler)

app.use('/api/auth', authRouter);
app.use('/api/img',imageRouter)

app.listen(port, () => {
    console.log(`Server live at ${port}`);
});
