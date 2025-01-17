const connection = require("../config/database")
// const { get } = require("../route/web")
const { getAllAccs } = require("../services/CRUDdatabase")

const getHomePage = async (req, res) => {
    let results = await getAllAccs();

    return res.render('home.ejs', { accounts: results })
}

const getCreatPage = (req, res) => {
    res.render("creatPage.ejs")
}

const login = async (req, res) => {
    const query = 'INSERT INTO `accounts`.`account`(`username`, `password`) VALUES(?, ?)';
    let username = req.body.username;
    let password = req.body.password;
    // console.log(username, password);
    let [err, result] = await connection.query(query, [username, password]);
}
module.exports = {
    getHomePage,
    getCreatPage,
    login
};