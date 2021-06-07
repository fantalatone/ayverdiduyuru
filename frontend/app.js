const express = require("express");
const expressLayouts = require("express-ejs-layouts");
const app = express();
const fetch = require('node-fetch');
const showdown = require("showdown");

app.use(express.static('public'))

app.use(expressLayouts)
app.set('layout', '.')
app.set('view engine', 'ejs')

var ip = "";

converter = new showdown.Converter();

function getAnnouncements() {
    return fetch(`http://${ip}:7475/duyuru/cek`, {method: "get", mode:"no-cors"})
    .then(response => response.json())
    .then(data => {
        data.forEach(entry => {
            html = converter.makeHtml(entry.content);
            entry.content = html;
        });
        return data.reverse();
    }).catch(err => console.log(err));
}

function getQAs() {
    return fetch(`http://${ip}:7475/soru/cek`, {method: "get", mode:"no-cors"})
    .then(response => response.json())
    .then(data => {
        return data.reverse();
    }).catch(err => console.log(err));
}

app.get("/", (req, res) => {
    getAnnouncements().then(announcements => {
        getQAs().then(qas => {
            res.render("index", {anns: announcements, qas: qas, ip});
        });
    });
});

app.listen(8000, "0.0.0.0", () => {
    ip = process.argv.slice(2);
    console.log("Çalışıyor.")
})
