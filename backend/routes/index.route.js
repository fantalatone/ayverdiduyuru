const config = require("../config");
const router = require("express").Router();
const announcement = require("../models/Announcement");
const QA = require("../models/QA");

router.get("/", (req, res) => {
    res.send( config.welcomeJSON() );
});

router.get("/cek", (req, res) => {
    announcement.find({}).then(announcements => {
            QA.find({}).then(qas => {
                    const filteredQas = qas.filter(function(value, index, arr){ 
                        return value.answer != undefined;
                    });
                    const mixed = announcements.concat(filteredQas);
                    const sortedData = mixed.sort(function(a,b){
                        return new Date(b.date) - new Date(a.date);
                      });
                    res.send(sortedData)
            }).catch(err => console.log(err))
    }).catch(err => console.log(err))
});

module.exports = router;