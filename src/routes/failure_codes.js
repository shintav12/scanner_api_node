const express = require('express');
const router = express.Router();

const mysqlConnection = require('../database');

router.get('/failure_codes', (req, res) => {
    var data = [];
    mysqlConnection.query('select  fc.id, fc.name, fc.description ' +
        'from cases c ' +
        'join cases_failurescodes cf on cf.case_id = c.id ' +
        'join failure_codes fc on fc.id = cf.failure_codes_id ' +
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