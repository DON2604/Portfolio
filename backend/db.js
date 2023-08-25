const mongoose = require('mongoose');
const mongoURI = "mongodb://127.0.0.1:2701";

function getConnection() {
    mongoose.connect(mongoURI).then(
        () => {
            console.log(`Connected successfully`);
        }
    ).catch(
        (err) => {
            console.log("error");
        }
    );
}

module.exports = getConnection;
