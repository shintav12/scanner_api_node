const express = require('express');
const router = express.Router();

const mysqlConnection = require('../database');

router.get('/options/:system_id?/:father_slug?', (req, res) => {
    var { father_slug, system_id } = req.params;
    if (typeof system_id === 'undefined') system_id = 1;
    var sql = 'SELECT * FROM options WHERE system_id = ? ';
    if (typeof father_slug === 'undefined') {
        father_slug = "";
    }
    sql += 'and father_slug = ?';
    mysqlConnection.query(sql, [system_id, father_slug], (err, rows, fields) => {
        if (!err) {
            res.json(rows);
        } else {
            console.log(err);
        }
    });
});

router.get('/options/father/:slug', (req, res) => {
    var { slug } = req.params;

    mysqlConnection.query('SELECT * FROM options WHERE father_slug = ?', [slug], (err, rows, fields) => {
        if (!err) {
            res.json(rows);
        } else {
            console.log(err);
        }
    });
});



module.exports = router;