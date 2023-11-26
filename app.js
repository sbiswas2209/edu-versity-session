const express = require('express');
const setupRoutes = require('./src/router');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');
dotenv.config();

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

function startServer() {
    const PORT = process.env.PORT || 8080;
    mongoose.connect(process.env.MONGO_URI);

    app.use('/users', require('./src/users/router'));

    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
}

startServer();
