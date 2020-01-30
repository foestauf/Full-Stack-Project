const express = require('express');
const moment = require('moment');
const router = express.Router();

const formats = [
    'X',
    'x',
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
    if (date.isValid()) {
        dateObj = {
            unix: new Date(date).getTime(),
            utc: new Date(date).toUTCString()
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

// Sun, 20 Nov 2016 17:31:29 GMT