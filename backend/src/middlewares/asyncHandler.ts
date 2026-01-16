const asyncHandler = (fn: Function) => {
    return (req: any, res: any, next: any) => {
        Promise.resolve(fn(req, res, next)) // When the function is called, it returns a promise.
            .catch((err: any) => {
                console.error(err);
                res.status(500).json({ // Response with a 500 status code
                    message: err.message || 'Internal Server Error', //If the error has a message, it will be sent to the client, otherwise a generic message will be sent.
                    stack: process.env.NODE_ENV === 'production' ? null : err.stack, // This line is for development purposes only, if the web app is in production, the stack trace will not be sent to the client.
                })
            })
    }
};

export default asyncHandler;

// This function is a middleware that handles errors in async functions.
// It takes a function as an argument and returns a new function that calls the original function and catches any errors that occur.
