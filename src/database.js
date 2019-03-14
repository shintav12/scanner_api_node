const mysql = require('mysql');

const mysqlConnection = mysql.createConnection({
    host: 'nezkadb.ci14njotsr6r.us-east-2.rds.amazonaws.com',
    user: 'freya',
    password: 'Freya2018!',
    database: 'AutoDataScanner'
});

mysqlConnection.connect(function(err) {
    if (err) {
        console.log(err);
    } else {
        console.log('DB Connected');
    }
});

module.exports = mysqlConnection;