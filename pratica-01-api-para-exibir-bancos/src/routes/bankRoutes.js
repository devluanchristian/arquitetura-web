module.exports = function(application){
  application.get('/', function(req, res){
    application.src.controllers.bankController.index(application, req, res);
  });
}