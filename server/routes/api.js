const express = require('express');
const moment = require('moment');
const router = express.Router();

const formats = [
    'X',
    'MMMM D, YYYY',
    'MMMM D YYYY',
    'MMM D, YYYY',
    'MMM D YYYY',
    'D MMMM YYYY',
    'D MMM YYYY',
    'YYYY MM D'
];
let dateObj;

router.get('/:date', (req, res, next) => {
    const data = req.params.date;
    const date = moment(data, formats);
    console.log(date);
    if (date.isValid()) {
        dateObj = {
            unix: Number(date.format('X')),
            natural: date.format('MMMM D, YYYY')
        };

    } else {
        dateObj = {
            "error": "Invalid Date",
        };
    }
    res.json(dateObj);
});

router.get('/', (req, res, next) => {
    res.json({
        unix: new Date().getTime(),
        utc: new Date().toUTCString()
    })
});

module.exports = router;
