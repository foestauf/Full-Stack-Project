const express = require('express');
const router = express.Router();
const dns = require('dns');
require('dotenv').config();
const mongoose = require('mongoose');
const database = mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true});
const db = require('./../components/dbhandler');
let url;



router.post('/new/:newUrl(*)', (req, res, next) => {
    url = req.params.newUrl;
    console.log(url);
    if (validURL(url)) {
        console.log('Valid URL received');
        if (dnsCheck(url)) {
            createAndSaveUrl(url, 1);
            console.log('DNS confirmed')
        } else {
            console.log('BAD DNS, do something!');
        }
    } else {
        console.log('Bad URL homie');
        res.json({
            error: "Invalid URL"
        })
    }
    res.json({
        hello: "We got it",
        url: url
    })
});

router.get('/:shortUrl', (req, res) => {
    let urlSearch = {
        shortUrl: encodeURI(req.params.shortUrl)
    }
    console.log(urlSearch);

})

function validURL(str) {
    let pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
        '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name
        '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
        '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
        '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
        '(\\#[-a-z\\d_]*)?$','i'); // fragment locator
    return !!pattern.test(str);
}

function dnsCheck(param) {
    console.log('Now in dnsCheck');
    dns.resolve4(extractHostname(param), (err, addresses) => {
        if (err) {
            return false;
        }
        console.log(`addresses: ${JSON.stringify(addresses)}`);
        addresses.forEach((a) => {
            dns.reverse(a, (err, hostnames) => {
                if (err) {
                    return false;
                }
                console.log(`reverse for ${a}: ${JSON.stringify(hostnames)}`);
            });
        });
        return true;
    });
}

function extractHostname(url) {
    var hostname;
    //find & remove protocol (http, ftp, etc.) and get hostname
    if (url.indexOf("//") > -1) {
        hostname = url.split('/')[2];
    }
    else {
        hostname = url.split('/')[0];
    }
    //find & remove port number
    hostname = hostname.split(':')[0];
    //find & remove "?"
    hostname = hostname.split('?')[0];
    console.log('hostname is: ' + hostname);
    return hostname;
}

module.exports = router;