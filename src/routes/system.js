const express = require('express');
const router = express.Router();

const mysqlConnection = require('../database');

router.get('/system', (req, res) => {
    const { brand_id } = req.params;
    var data = [];
    mysqlConnection.query('SELECT id, name FROM system', (err, rows, fields) => {
        if (!err) {
            data = rows;
            res.json(rows);
        } else {
            console.log(err)
        }
    });

});

module.exports = router;