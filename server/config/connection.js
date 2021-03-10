const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || "mongodb://locahost/travel-with", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
});

module.exports = mongoose.connection;