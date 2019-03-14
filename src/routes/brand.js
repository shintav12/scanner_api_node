const express = require('express');
const router = express.Router();

const mysqlConnection = require('../database');

router.get('/brand', (req, res) => {
    mysqlConnection.query('SELECT id, name FROM brand', (err, rows, fields) => {
        if (!err) {
            res.json(rows);
        } else {
            console.log(err);
        }
    });
});

module.exports = router;