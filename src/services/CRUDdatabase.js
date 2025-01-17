const connection = require("../config/database");

const getAllAccs = async () => {
    let [results, field] = await connection.query("select * from account");
    return results;
}

module.exports = {
    getAllAccs
}
