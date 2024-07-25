const Regedit = require("regedit");

module.exports.exists = async function (key) {
    return new Promise((resolve, reject) => {
        Regedit.list(key, (error, result) => {
            if (error) {
                reject(error);
            } else {
                if (result[key] && result[key].exists) {
                    resolve(true);
                } else {
                    resolve(false);
                }
            }
        });
    });
}
module.exports.create = async function (key) {
    return new Promise((resolve, reject) => {

        Regedit.createKey([key], (error, result) => {
            if (error) {
                reject(error);
            } else {
                resolve();
            }
        })
    });
}