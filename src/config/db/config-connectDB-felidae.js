const mongoose = require('mongoose');
async function connect() {
    try {
        await mongoose.connect('mongodb://localhost:27017/Ninhnv_Nodejs');

        console.log("Connection Successfully!");
    } catch (error) {
        console.log(error, "Connect Fail");
    }
}

module.exports = { connect };