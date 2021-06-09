const express = require("express")
const app = express()
const fetch = require("node-fetch")

let url = ""

app.set("view engine", "pug")
app.use(express.static('public'))

function getAnnouncements() {
    return fetch(`http://${url}:7475/duyuru/cek`, {method: "get", mode:"no-cors"})
    .then(response => response.json())
    .then(data => {
        const sortByDate = data => {
            const sorter = (a, b) => {
               return new Date(b.date).getTime() - new Date(a.date).getTime();
            }
            data.sort(sorter);
        };
        sortByDate(data);
        return data;
    }).catch(err => console.log(err));
}

function getQuestions() {
    return fetch(`http://${url}:7475/soru/cek`, {method: "get", mode:"no-cors"})
    .then(response => response.json())
    .then(data => {
        const sortByDate = data => {
            const sorter = (a, b) => {
               return new Date(b.date).getTime() - new Date(a.date).getTime();
            }
            data.sort(sorter);
        };
        sortByDate(data);
        return data;
    }).catch(err => console.log(err));
}

app.get("/", (req, res) => {
    res.render("index")
})

app.get("/duyuru", (req, res) => {
    getAnnouncements().then(data => {
        res.render("duyuru", {announcements: data, ip: url})
    });
})

app.get("/soru", (req, res) => {
    getQuestions().then(data => {
        res.render("soru", {questions: data, ip: url})
    });
})

app.listen("8000", "0.0.0.0", () => {
    url = process.argv.slice(2)
    console.log("Arayüz Sistemi Çalışıyor.")
})