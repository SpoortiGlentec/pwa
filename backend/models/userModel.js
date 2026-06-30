const db = require("../config/db");

const addUser = (user, callback) => {

    const sql =
        "INSERT INTO users(name,email,age) VALUES(?,?,?)";

    db.query(
        sql,
        [user.name, user.email, user.age],
        callback
    );

};
const getUsers = (callback) => {

    const sql = "SELECT * FROM users";

    db.query(sql, callback);

};
module.exports = {
    addUser,
    getUsers
};