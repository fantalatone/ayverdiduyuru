const config = require("./config"); // CONFIG
const mongoose = require("mongoose");

mongoose.connect(config.mongouri, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false });
mongoose.connection.on("open", () => console.log("Veritabanı bağlantısı \x1b[32mbaşarı\x1b[0m ile gerçekleştirildi.") );
mongoose.connection.on("error", (err) => { throw err; });

module.exports = mongoose;