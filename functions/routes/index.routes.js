const express = require('express');
const router = express.Router();

//routes 
const carrousel = require("./carrousel.routes");
const products = require("./products.routes");
const ourmission = require("./ourmission.routes");

router.use('',carrousel);
router.use('',products);
router.use('',ourmission);

module.exports = router;