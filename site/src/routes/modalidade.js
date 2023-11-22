var express = require("express");
var router = express.Router();

var skatistaController = require("../controllers/skatistaController");

router.get("/", function (req, res) {
   skatistaControllerController.testar(req, res);
});

router.get("/pegar", function (req, res) {
    skatistaController.pegar(req, res);
});

router.post("/street", function (req, res) {
    skatistaController.street(req, res);
})

router.post("/vert", function (req, res) {
    skatistaController.vert(req, res);
})

router.post("/bowl", function (req, res) {
    skatistaController.bowl(req, res);
})

router.post("/freestyle", function (req, res) {
    skatistaController.freestyle(req, res);
})

router.post("/downhill", function (req, res) {
    skatistaController.downhill(req, res);
})


module.exports = router;