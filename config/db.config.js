const mysql = require('mysql');

//create connection here now.
const dbConn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'RecordsKeeper'
});

dbConn.connect(function(err) {
    if (err) throw err;
    console.log("Database Connected Successfully");
});

module.exports = dbConn;