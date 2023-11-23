var express = require("express");
var router = express.Router();

var modalidadeController = require("../controllers/modalidadeController");

router.get("/", function (req, res) {
   modalidadeController.testar(req, res);
});

router.get("/pegar", function (req, res) {
    modalidadeController.pegar(req, res);
});

router.post("/street", function (req, res) {
    modalidadeController.street(req, res);
})

router.post("/vert", function (req, res) {
    modalidadeController.vert(req, res);
})

router.post("/bowl", function (req, res) {
    modalidadeController.bowl(req, res);
})

router.post("/freestyle", function (req, res) {
    modalidadeController.freestyle(req, res);
})

router.post("/downhill", function (req, res) {
    modalidadeController.downhill(req, res);
})


module.exports = router;