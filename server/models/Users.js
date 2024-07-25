const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    name: String,
    email: String,
    phone: String,
    wallet: {
        type: Number,
        default: 0
    }

});


const UserModel = mongoose.model("users", UserSchema);

module.exports = UserModel;