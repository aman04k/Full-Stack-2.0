const mongoose = require("mongoose");
require("dotenv").config();

const dbConnect = () => {
    mongoose.connect(process.env.DATABASE_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log("Database Connected"))
    .catch((error) => {
        console.log("Database Connection Error");
        console.log(error);
        process.exit(1);
    });
};

module.exports = dbConnect;
