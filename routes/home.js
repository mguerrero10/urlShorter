const express = require("express");
const { leerUrls, agregarUrl } = require("../controllers/homeController");

const router = express.Router();

router.get("/", leerUrls);
router.post("/", agregarUrl);

//router.get("/", (req, res) => {});

module.exports = router;
