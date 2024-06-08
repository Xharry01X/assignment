const errorHandler = (err, req, res, next) => {
    console.error(err.message);
    
   
    const statusCode = err.statusCode || 500;
    
    // Respond with the error message
    res.status(statusCode).json({
        success: false,
        message: err.message || 'Server Error',
    });
};

module.exports = errorHandler;
