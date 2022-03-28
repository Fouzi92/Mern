const userModel = require("../models/user.model");

module.exports.signUP = async (req, res) => {
const {pseudo, email, password } = req.body

try {
    const user = await UserModel.create({pseudo, email, password})
    res.status(201).json({ user: user._id})
}

};
