const notFound = (req,res,next)=>{

    const error = new Error(`Not Found - ${req.originalUrl}`);
    res.status(404);
    next(error);


}



const errorHandler = (err,req,res,next)=>{

    //figure out the status code
    // if the status code is 200 then set to 500 else return the status code

    const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
    res.status(statusCode);
    res.json({

        message: err.message,
        stack: process.env.NODE_ENV === 'production' ? null : err.stack, // show stack only if its in production
    })




}

export {notFound,errorHandler}