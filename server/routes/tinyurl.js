const express = require('express');
const router = express.Router();
const dns = require('dns');
let url;
function validURL(str) {
    let pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
        '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name
        '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
        '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
        '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
        '(\\#[-a-z\\d_]*)?$','i'); // fragment locator
    return !!pattern.test(str);
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

router.get('/new/:newUrl(*)', (req, res, next) => {
    url = req.params.newUrl;
    console.log(url);
    if (validURL(url)) {
        console.log('Valid URL received');
        if (dnsCheck(url)) {
            let dateCreated = Date();
            let dateUsed = Date();

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

module.exports = router;