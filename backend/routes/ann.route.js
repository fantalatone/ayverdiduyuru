// ANNOUNCEMENT ROUTER
const config = require("../config");
const router = require("express").Router();
const announcement = require("../models/Announcement");
const multer = require("multer");
const upload = multer({dest: "uploads/"});
const fs = require("fs");

router.get("/cek", (req, res) => {
    announcement.find({}).then(announcements => {
        if (announcements.length != 0) {
            return res.send(announcements)
        }
        res.send([]);
    });
});

router.post("/yeni", upload.single("banner"), (req, res) => {
    const { title, content } = req.body;
    let errors = [];
    if (!title || !content) { errors.push("Duyuru oluşturabilmek için gerekli olan tüm alanları doldurmalısınız."); }    
    if (errors.length > 0) { res.status(406); return res.send({ errors }); }

    announcement.findOne({ title: title }).then(entry => {
        if (entry) { errors.push("Daha önce bu başlıkla bir duyuru oluşturulmuştur."); res.status(406); return res.send({ errors }); }
        
        let finalBanner = {}
        if (req.file) {
            const { path, mimetype } = req.file
            const rawBanner = fs.readFileSync(path)
            finalBanner = {
                contentType: mimetype,
                data:  Buffer.from(rawBanner).toString('base64')
            }
        }
        
        const newAnn = new announcement({
            type: "_duyuru",
            title: title,
            content: content,
            banner: finalBanner,
            date: Date.now()
        });

        newAnn.save();
        return res.send(config.successfulnew(title, content));
    }).catch(err => {throw err});
});

router.post("/guncelle", upload.single("banner"), (req, res) => {
    const { _id, title, content } = req.body;
    let errors = [];
    if (!_id) { errors.push("Duyuruları güncellemek için id'yi girmek zorundasınız."); }    
    if (errors.length > 0) { res.status(406); return res.send({ errors }); }

    announcement.findOne({ _id: _id }).then(entry => {
        if (!entry) { errors.push("Böyle bir duyuru bulunmamaktadır."); res.status(406); return res.send({ errors }); }
        
        let finalBanner = {}
        if (req.file) {
            const { path, mimetype } = req.file
            const rawBanner = fs.readFileSync(path)
            finalBanner = {
                contentType: mimetype,
                data:  Buffer.from(rawBanner).toString('base64')
            }
        }

        let update = {}
        if (title) update.title = title;
        if (content) update.content = content;
        if (finalBanner.data) update.banner = finalBanner;
        update.date = Date.now();

        announcement.findOneAndUpdate({ _id: _id }, update, { upsert: true, useFindAndModify: false })
            .catch(err => {throw err;});
        
        return res.send(config.successfulupdate(title, content));
    }).catch(err => {throw err});
});

router.post("/sil", (req, res) => {
    const { id } = req.body;
    let errors = [];
    if (!id) errors.push("Duyuru ID'si olmadan duyuruları silemezsiniz.");
    if (errors.length > 0) { res.status(406); return res.send({ errors }); }

    announcement.findOneAndDelete({ _id: id}).catch(err => console.log(err));
    return res.send(200);
});

module.exports = router;