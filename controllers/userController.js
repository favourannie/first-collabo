const userModel = require('../models/user');

exports.createUser = async (req, res) => {
    try {
        const { firstName, lastName, age, email, isSingle } = req.body;
        const newUser = await userModel.create({
            firstName,
            lastName,
            age,
            email,
            isSingle,
        });
            res.status(201).json({
                messgae: "User created successfully",
                user: newUser,
            })
    ;
    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
};