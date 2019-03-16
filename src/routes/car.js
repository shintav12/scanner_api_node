const express = require('express');
const router = express.Router();

const mysqlConnection = require('../database');

router.get('/car/:brand_id', (req, res) => {
    const { brand_id } = req.params;
    mysqlConnection.query('SELECT DISTINCT year FROM car WHERE brand_id = ?', [brand_id], (err, rows, fields) => {
        if (!err) {
            res.json(rows);
        } else {
            console.log(err)
        }
    });
});

router.get('/car/:brand_id/:year', (req, res) => {
    const { brand_id, year } = req.params;
    mysqlConnection.query('SELECT DISTINCT name FROM car WHERE brand_id = ? and year = ?', [brand_id, year], (err, rows, fields) => {
        if (!err) {
            res.json(rows);
        } else {
            console.log(err)
        }
    });
});

router.get('/car/:brand_id/:year/:model', (req, res) => {
    const { brand_id, year, model } = req.params;
    mysqlConnection.query('SELECT DISTINCT engine FROM car WHERE brand_id = ? and year = ? and name = ?', [brand_id, year, model], (err, rows, fields) => {
        if (!err) {
            res.json(rows);
        } else {
            console.log(err)
        }
    });
});

router.get('/car/:brand_id/:year/:model/:engine', (req, res) => {
    const { brand_id, year, model, engine } = req.params;
    mysqlConnection.query('SELECT c.*, b.name as brand FROM car c ' +
        'join brand b on c.brand_id = b.id ' +
        'WHERE c.brand_id = ? and c.year = ? and c.name = ? and c.engine = ?', [brand_id, year, model, engine], (err, rows, fields) => {
            if (!err) {
                res.json(rows[0]);
            } else {
                console.log(err)
            }
        });
});

module.exports = router;