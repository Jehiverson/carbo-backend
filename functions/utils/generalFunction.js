const sha1 = require("sha1");

const randomId = (parameter1, parameter2) => {
    let hash = sha1(parameter1+parameter2);
    return hash;
};

module.exports = {
    randomId
}