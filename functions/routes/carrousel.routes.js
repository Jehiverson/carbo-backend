const express = require('express');
const router = express.Router();

//Functions
const generalFunctions = require("../utils/generalFunction");
const dbFunction = require('../utils/dbFunctions');
const { getDataCollection, getDataCollectionForId, setDataCollection, updateDataCollection, deleteDataCollection } = dbFunction;

router.get("/carousel", async(req, res) => {
   var data = await getDataCollection('Carousel');
   res.json({data});
});

router.get("/carousel/:id", async(req, res) => {
   console.log(req.params.id);
    var data = await getDataCollectionForId('Carousel', req.params.id);
    res.json({data});
 });

 router.get("/carousel/:page/:value", async(req, res) => {
   console.log(req.params)
   var data = await getDataCollection('Carousel', true, {field: req.params.page, condition: '==', value: req.params.value});
   res.json({data});
});

router.post("/carousel", async(req, res) => {
    let idGenereted = generalFunctions.randomId(req.body.title, req.body.subtitle);
    req.body.id = idGenereted;
    await setDataCollection('Carousel', idGenereted, req.body);
    res.json({status: 1});
 });

 router.patch("/carousel", async(req, res) => {
    var dataUpdate = await updateDataCollection('Carousel', req.body.id, req.body);
    res.json({status: dataUpdate});
 });

 router.delete("/carousel", async(req, res) => {
    var dataDelete = await deleteDataCollection('Carousel', req.body.id);
    res.json({status: dataDelete});
 });
 
module.exports = router;