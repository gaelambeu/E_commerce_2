const { default: mongoose } = require("mongoose")

const dbConnecct = () => {
    try {
        const conn = mongoose.connect('')
        console.log("Databse connected");
    } catch (error) {
        console.log("Databse error");
    }
}