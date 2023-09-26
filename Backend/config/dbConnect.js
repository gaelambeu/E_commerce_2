const { default: mongoose } = require("mongoose")

const dbConnecct = () => {
    try {
        const conn = mongoose.connect('')
    } catch (error) {
        throw new Err
    }
}