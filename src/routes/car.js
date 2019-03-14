const express = require('express');
const router = express.Router();

const mysqlConnection = require('../database');

router.get('/car/years/:brand_id', (req, res) => {
    const { brand_id } = req.params;
    mysqlConnection.query('SELECT DISTINCT year FROM car WHERE brand_id = ?', [brand_id], (err, rows, fields) => {
        if (!err) {
            res.json(rows);
        } else {
            console.log(err)
        }
    });
});

router.get('/car/years/:brand_id/:year', (req, res) => {
    const { brand_id, year } = req.params;
    mysqlConnection.query('SELECT DISTINCT name FROM car WHERE brand_id = ? and year = ?', [brand_id, year], (err, rows, fields) => {
        if (!err) {
            res.json(rows);
        } else {
            console.log(err)
        }
    });
});

router.get('/car/years/:brand_id/:year/:model', (req, res) => {
    const { brand_id, year, model } = req.params;
    mysqlConnection.query('SELECT DISTINCT engine FROM car WHERE brand_id = ? and year = ? and name = ?', [brand_id, year, model], (err, rows, fields) => {
        if (!err) {
            res.json(rows);
        } else {
            console.log(err)
        }
    });
});

module.exports = router;