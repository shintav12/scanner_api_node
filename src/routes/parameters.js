const express = require('express');
const router = express.Router();

const mysqlConnection = require('../database');
router.get('/parameters', (req, res) => {
    var data = [];
    mysqlConnection.query('select  p.id, p.name, cp.value ' +
        'from cases c ' +
        'join cases_parameters cp on cp.case_id = c.id ' +
        'join parameters p on p.id = cp.parameter_id ' +
        'where c.status = 1', (err, rows, fields) => {
            if (!err) {
                data = rows;
                res.json(rows);
            } else {
                console.log(err)
            }
        });

});

module.exports = router;