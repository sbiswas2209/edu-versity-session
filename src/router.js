const { Router } = require('express');

function setupRoutes() {
    const api = Router();
    api.use('/users', require('./users/router'));
}

module.exports = setupRoutes;