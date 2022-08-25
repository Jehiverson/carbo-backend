const express = require('express');
const router = express.Router();

//routes 
const carrousel = require("./carrousel.routes");

//Carrousel
router.use('',carrousel);


module.exports = router;