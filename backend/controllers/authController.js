const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
const User = require("../models/userModel");
const expressAsyncHandler = require("express-async-handler");

dotenv.config();

const Register = expressAsyncHandler(async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = await User.findOne({ username });
        if (user) {
            return res.status(400).json({ msg: 'User already exists' });
        }

        const newUser = new User({ username, password });

        const salt = await bcrypt.genSalt(10);
        newUser.password = await bcrypt.hash(password, salt);

        await newUser.save();

        const payload = {
            user: {
                id: newUser.id
            }
        };

        jwt.sign(payload, process.env.SECRET_KEY, { expiresIn: 36000 }, (err, token) => {
            if (err) throw err;
            res.cookie('token', token, { httpOnly: true });
            res.status(200).json({ message: "Register successful", token }); // Include token in the response body
        });

    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server error');
    }
});


const Login = expressAsyncHandler(async (req, res) => {
    try {
        const { username, password } = req.body;

        let user = await User.findOne({ username });
        if (!user) return res.status(400).json({ msg: 'Invalid credentials' });

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(400).json({ msg: 'Invalid credentials' });

        const payload = {
            user: {
                id: user.id
            }
        };

        jwt.sign(payload, process.env.SECRET_KEY, { expiresIn: 36000 }, (err, token) => {
            if (err) throw err;
            res.cookie('token', token, { httpOnly: true });
            res.status(200).json({ message: "Login successful",token });
        });

    } catch (error) {
        console.log(error);
        console.error(error.message);
        res.status(500).send('Server error');
    }
});

module.exports = { Register, Login };
