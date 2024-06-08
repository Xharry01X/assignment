const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");

dotenv.config();

module.exports = function (req, res, next) {
    // Retrieve the token from the cookies
    const token = req.cookies.token;

    if (!token) {
        return res.status(401).json({ message: "Authorization denied, no token provided" });
    }

    try {
        // Verify the token
        const decoded = jwt.verify(token, process.env.SECRET_KEY);

        // Attach the user payload to the request object
        req.user = decoded.user;
        next();
    } catch (error) {
        return res.status(401).json({ message: 'Token is not valid' });
    }
};
