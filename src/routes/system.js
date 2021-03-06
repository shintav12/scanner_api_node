const express = require('express');
const router = express.Router();

const mysqlConnection = require('../database');

router.get('/system', (req, res) => {
    var data = [];
    mysqlConnection.query('select  s.id, s.name ' +
        'from cases c ' +
        'join cases_systems cs on cs.case_id = c.id ' +
        'join system s on s.id = cs.system_id ' +
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