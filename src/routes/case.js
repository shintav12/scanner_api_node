const express = require('express');
const router = express.Router();

const mysqlConnection = require('../database');

router.get('/case', (req, res) => {
    mysqlConnection.query('SELECT * FROM cases where status = 1', (err, rows, fields) => {
        if (!err) {
            res.json(rows[0]);
        } else {
            console.log(err);
        }
    });
});

module.exports = router;