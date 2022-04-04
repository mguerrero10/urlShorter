const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  const urls = [
    { origin: "www.pruebaconnode.com/1", shortURL: "dfsdffa1" },
    { origin: "www.pruebaconnode.com/2", shortURL: "dfsdffa2" },
    { origin: "www.pruebaconnode.com/3", shortURL: "dfsdffa3" },
  ];
  res.render("home", { urls: urls });
});

//router.get("/", (req, res) => {});

module.exports = router;
