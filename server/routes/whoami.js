const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    let ip = (req.ip.replace(/:+|[a-z]+/g, ""));
    let responseObj = {
        ipaddress: ip,
        language: req.headers['accept-language'].split(',')[0],
        software: req.headers['user-agent'].split(') ')[0].split(' (')[1]
    };
//    res.setHeader('Content-Type', 'application/json');
    res.json(responseObj);
});

module.exports = router;