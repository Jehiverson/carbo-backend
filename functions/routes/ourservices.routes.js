const express = require('express');
const router = express.Router();

//Functions
const generalFunctions = require("../utils/generalFunction");
const dbFunction = require('../utils/dbFunctions');
const { getDataCollection, getDataCollectionForId, setDataCollection, updateDataCollection, deleteDataCollection } = dbFunction;

router.get("/ourservices", async(req, res) => {
   var data = await getDataCollection('OurServices');
   res.json({data});
});

router.get("/ourservices/:id", async(req, res) => {
   console.log(req.params.id);
    var data = await getDataCollectionForId('OurServices', req.params.id);
    res.json({data});
 });

 router.get("/ourservices/:page/:value", async(req, res) => {
   var data = await getDataCollection('OurServices', true, {field: req.params.page, condition: '==', value: req.params.value});
   res.json({data});
});

router.post("/ourservices", async(req, res) => {
    let idGenereted = generalFunctions.randomId(req.body.title, req.body.description);
    req.body.id = idGenereted;
    await setDataCollection('OurServices', idGenereted, req.body);
    res.json({status: 1});
 });

 router.patch("/ourservices", async(req, res) => {
    var dataUpdate = await updateDataCollection('OurServices', req.body.id, req.body);
    res.json({status: dataUpdate});
 });

 router.delete("/ourservices", async(req, res) => {
    var dataDelete = await deleteDataCollection('OurServices', req.body.id);
    res.json({status: dataDelete});
 });
 
module.exports = router;