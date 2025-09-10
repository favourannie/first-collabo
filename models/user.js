const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
    firstName:{
        type: String,
        required: true
    },
     lastName:{
        type: String,
        required: true
    },
     age:{
        type: Number,
        required: true
    },
     email:{
        type: String,
        required: true,
        unique: true
    },
     isSingle:{
        type: Boolean,
        required: true
    }
}, {
    timestamp: true
})

const userModel = mongoose.model("User", userSchema)

module.exports = userModel