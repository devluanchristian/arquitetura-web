var fs = require("fs");

class banks {
  constructor() {}
  getBank(callback) {
    fs.readFile("./data/banco.json", "utf8", function (err, result) {
      if (!err) {
        var obj = JSON.parse(result);
      }
      obj.banks.forEach(function (bank) {
        if (i >= 0) {
          data[i] = bank;
          i--;
        }
      });
      callback(err, result);
    });
  }
}

module.exports = function () {
  return banks;
};
