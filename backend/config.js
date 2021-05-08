const { name, description, version, author } = require("./package.json");
const mongouri = "mongodb://localhost:27017/veritabani";
const secret = "<your_secret_key>";

const welcomeJSON = () => {
    return {
        "name": name,
        "desc": description,
        "version": version,
        "author": author
    };
};

const successfulnew = (title, content) => {
    return {
        "status": 200,
        "statusinfo": "Duyuru oluşturuldu.",
        "title": title,
        "content": content
    };
}

const successfulupdate = (title, content) => {
    return {
        "status": 200,
        "statusinfo": "Duyuru güncellendi.",
        "title": title,
        "content": content
    };
}

const successfuldelete = () => {
    return {
        "status": 200,
        "statusinfo": "Duyuru silindi.",
        "content": content
    };
}

module.exports = { welcomeJSON, successfulnew, successfulupdate, mongouri };