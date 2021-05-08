const config = require("../config");
const router = require("express").Router();

router.get("/", (req, res) => {
    res.send( config.welcomeJSON() );
});

module.exports = router;