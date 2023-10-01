const error = (req, res, next) => {
    const err = new Error('Oops an error occur!!');
    err.status = 404;
    next(err);
}
module.exports = error;