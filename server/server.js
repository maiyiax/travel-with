const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3005;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
    res.send("Welcome to Express")
});

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/travel-with", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
});

app.listen(PORT, () => console.log(`API connected on localhost ${PORT}`));