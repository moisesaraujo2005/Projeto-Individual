var express = require("express");
var router = express.Router();

var usuarioController = require("../controllers/usuarioController");
  
//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.get("/listar", function (req, res) {
    usuarioController.listar(req, res);
});

router.post("/cadastrar", function (req, res) {
    usuarioController.cadastrar(req, res);
})

router.post("/entrar", function (req, res) {
    usuarioController.entrar(req, res);
});
router.get("/funcskatista", function (req, res) {
    usuarioController.funcskatista(req, res);

});router.get("/funcnoskatista", function (req, res) {
    usuarioController.funcnoskatista(req, res);
});


router.get("/homemskatista", function (req, res) {
    usuarioController.homemskatista(req, res);
})

router.get("/mulherskatista", function (req, res) {
    usuarioController.mulherskatista(req, res);
})


router.get("/homemnoskatista", function (req, res) {
    usuarioController.homemnoskatista(req, res);
})

router.get("/mulhernoskatista", function (req, res) {
    usuarioController.mulhernoskatista(req, res);
})

module.exports = router;