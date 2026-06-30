const userModel = require("../models/userModel");

const addUser = (req, res) => {

    const user = req.body;

    userModel.addUser(user, (err, result) => {

        if (err) {
            return res.status(500).json(err);
        }

        res.json({
            message: "User Added Successfully"
        });

    });

};
const getUsers = (req, res) => {

    userModel.getUsers((err, result) => {

        if (err) {
            return res.status(500).json(err);
        }

        res.json(result);

    });

};
module.exports = {
    addUser,
    getUsers
};