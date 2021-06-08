const express = require("express"); // ANA MODÜL
const api = express();
const useragent = require("express-useragent");

require("./database");

api.use(useragent.express());
api.use(express.json());
api.use(express.urlencoded({extended: true}))

api.use("/", require("./routes/index.route"));
api.use("/duyuru", require("./routes/ann.route"));
api.use("/soru", require("./routes/qa.route"));

/*   LISTEN SERVER PORT   */
api.listen(7475, () => {
    console.log("\nAPI \x1b[32mbaşarı\x1b[0m ile çalıştırıldı.");
});