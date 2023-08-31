var fs = require("fs");

class banks {
  constructor() {}
  getBank(callback) {
    fs.readFile("./data/banco.json", "utf8", function (err, result) {
      if (!err) {
        callback(err, result);
      }
    });
  }
}

module.exports = function () {
  return banks;
};
