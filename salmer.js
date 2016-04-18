var http = require("http");
var jsdom = require("jsdom");
var querystring = require("querystring");
var Iconv = require('iconv').Iconv;

var iconv = new Iconv('ISO-8859-1', 'UTF-8');


function getSalme(salmeNr, cb) {
    var data = querystring.stringify({
        SalmeNr: salmeNr,
        x: 20,
        y: 12
    });
    var hostname = "www.dendanskesalmebogonline.dk";
    var options = {
        "method": "POST",
        "encoding": "iso-8859-1",
        "hostname": hostname,
        "port": null,
        "path": "/salme/",
        "headers": {
            "pragma": "no-cache",
            "origin": "http//www.dendanskesalmebogonline.dk",
            "accept-encoding": "gzip, deflate",
            "accept-language": "da,sv;q=0.8,en-US;q=0.6,en;q=0.4",
            "upgrade-insecure-requests": "1",
            "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/49.0.2623.87 Safari/537.36",
            "content-type": "application/x-www-form-urlencoded; charset=iso-8859-1",
            "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8",
            "cache-control": "no-cache",
            "referer": "http//www.dendanskesalmebogonline.dk/salme/",
            //"cookie": "PHPSESSID=4tboo4sv89bs4alglouecks3v1; __utmt=1; __utma=113620370.1754423848.1460876921.1460876921.1460876921.1; __utmb=113620370.32.10.1460876921; __utmc=113620370; __utmz=113620370.1460876921.1.1.utmcsr=google|utmccn=(organic)|utmcmd=organic|utmctr=(not%20provided)",
            "connection": "keep-alive"
        },
        "body": data
    };

    var req = http.request(options, function(res) {

        var chunks = [];

        res.on("data", function(chunk) {
            chunks.push(iconv.convert(chunk));
        });

        res.on("end", function() {
            var body = Buffer.concat(chunks);
            var html = body.toString();
            jsdom.env(
                html, ["http://code.jquery.com/jquery.js"],
                function(err, window) {
                    var song = {
                        forfatter: null,
                        number: salmeNr,
                        name: window.$(".salme-navn").text(),
                        texts: []
                    };
                    var biografi = window.$("a[href^='/biografi']");
                    song.forfatter = {
                        href: "http://" + hostname + biografi.attr('href'),
                        name: biografi.text()
                    };
                    Array.prototype.forEach.call(window.$(".salme-vers-tekst"), function(e) {
                        song.texts.push(e.innerHTML.replace(/\<br\>/ig, '\n').replace(/             /g, ''));
                    });
                    console.log(song);
                    cb(song);
                }
            );
        });
    });

    req.write(data);
    req.end();
}
module.exports = getSalme;
