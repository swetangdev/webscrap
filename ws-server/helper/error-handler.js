module.exports = errorHandler;

function errorHandler(req, res) {
    res.status(500).json({message: 'Sorry, requested resource not found.'});
}