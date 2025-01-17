require("dotenv").config();
const express = require('express');
const configViewEngine = require("./config/viewEngine");
const webRoute = require("./route/web");
const connection = require("./config/database");
const app = express()
const port = process.env.PORT || 3000;


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//configure template engine
configViewEngine(app);

app.use("/", webRoute)

const query = 'select * from account';
// connection.query(query, (err, results) => {
//     if (err) {
//         console.error('Error executing query:', err);
//         return;
//     }
//     console.log('Query results:', results);
// });
const test = async () => {
    const [err, results] = await connection.query(query);
    console.log(err);
}
// test()
// connection.end();
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})