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
const getUpdatePage = async (req, res) => {
    let id = req.params.id;
    // console.log("", req.params.id);
    let query = "select * from account where id = ?";
    let [results] = await connection.query(query, [id]);
    let account = results && results.length > 0 ? results[0] : {};
    res.render("updatePage.ejs", ({ account: account, id: id }))
}

const update = async (req, res) => {
    let id = req.params.id;
    let username = req.body.username;
    let password = req.body.password;
    const query = "UPDATE account SET username = ?, password = ? WHERE id = ?";
    const [result] = await connection.query(query, [username, password, id]);
    res.send("done")
}
const deleteAcc = async (req, res) => {
    let id = req.params.id;
    const query = 'DELETE FROM account WHERE id = ?';
    const [result] = await connection.query(query, [id]);
    res.send("done")
}
const login = async (req, res) => {
    const query = 'INSERT INTO `accounts`.`account`(`username`, `password`) VALUES(?, ?)';
    let username = req.body.username;
    let password = req.body.password;
    // console.log(username, password);
    let [err, result] = await connection.query(query, [username, password]);
    let results = await getAllAccs();
    res.render("home.ejs", ({ accounts: results }))
}
module.exports = {
    getHomePage,
    getCreatPage,
    getUpdatePage,
    update,
    deleteAcc,
    login
};