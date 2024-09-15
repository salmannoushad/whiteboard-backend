// utils/CustomError.js
class CustomError extends Error {
    constructor(statusCode, message, isOperational = true) {
      super(message);
      this.statusCode = statusCode;
      this.isOperational = isOperational;
      
      // Capture stack trace
      Error.captureStackTrace(this, this.constructor);
    }
  }
  
  module.exports = CustomError;
  