const mysql = require('mysql');

const mysqlConnection = mysql.createConnection({
    host: 'cursosautodata.c0bthxtceuy8.us-east-1.rds.amazonaws.com',
    user: 'kymsonmaricones',
    password: 'AUTOmotive9318rv#',
    database: 'solus'
});

mysqlConnection.connect(function(err) {
    if (err) {
        console.log(err);
    } else {
        console.log('DB Connected');
    }
});

module.exports = mysqlConnection;