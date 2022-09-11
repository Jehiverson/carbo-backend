const express = require('express');
const router = express.Router();

//routes 
const carrousel = require("./carrousel.routes");
const products = require("./products.routes");
const ourmission = require("./ourmission.routes");
const clienttestimonials = require("./clienttestimonials.routes");
const ourservices = require("./ourservices.routes");
const aboutus = require("./aboutus.routes");
const sendmethods = require("./sendmethods.routes");
const footer = require("./footer.routes");
const location = require("./location.routes");
const locationdescription = require("./locationdescription.routes");

router.use('', carrousel);
router.use('', products);
router.use('', ourmission);
router.use('', clienttestimonials);
router.use('', ourservices);
router.use('', aboutus);
router.use('', sendmethods);
router.use('', footer);
router.use('', location);
router.use('', locationdescription);

module.exports = router;