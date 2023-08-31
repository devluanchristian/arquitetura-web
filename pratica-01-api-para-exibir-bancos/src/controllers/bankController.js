module.exports.index = function(application, req, res) {
  var bankModel = new application.src.models.bankModel();

  bankModel.getBank(function(err, result) {
    res.render("banks/index", {banks : result});
  });
}