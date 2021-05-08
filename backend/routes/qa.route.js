const config = require("../config");
const router = require("express").Router();
const QA = require("../models/QA");

router.get("/cek", (req, res) => {
    QA.find({}).then(qas => {
        if (qas.length > 0) {
            res.set({
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*",
            });
            return res.send(qas);
        }
        res.send([]);
    });
});

router.get("/cekf", (req, res) => {
    QA.find({}).then(qas => {
        if (qas.length > 0) {
            const filteredQas = qas.filter(function(value, index, arr){ 
                return value.answer != undefined;
            });
            res.set({
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*",
            });
            return res.send(filteredQas);
        }
        res.send([]);
    });
});

router.post("/yeni", (req, res) => {
    const { question } = req.body;
    let errors = [];
    if (!question) { errors.push("Yeni bir soru sorabilmek için lütfen içerik giriniz."); }    
    if (errors.length > 0) { res.status(406); return res.send({ errors }); }

    const newQA = new QA({
        question: question
    });
    newQA.save();
    res.send("OK!");
});

router.post("/cevapla", (req, res) => {
    const { id, answer } = req.body;
    let errors = [];
    if (!answer || !id) { errors.push("Soru ID'si veya cevap boş olarak soru cevaplanamaz"); }    
    if (errors.length > 0) { res.status(406); return res.send({ errors }); }

    let update = {};
    update.answer = answer;

    QA.findOneAndUpdate({ _id : id }, update, { upsert: true, useFindAndModify: false })
        .catch(err => console.log(err));
    return res.send("Güzel Cevap")
});

module.exports = router;