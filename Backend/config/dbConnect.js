const { default: mongoose } = require("mongoose")

const dbConnect = () => {
    try {
        const conn = mongoose.connect('')
        console.log("Databse connected successfully");
    } catch (error) {
        console.log("Databse error");
    }
}

module.exports = dbConnect;