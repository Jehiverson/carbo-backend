const express = require('express');
const router = express.Router();
//I never used because i implement at Carousel with option in select
//Functions
const generalFunctions = require("../utils/generalFunction");
const dbFunction = require('../utils/dbFunctions');
const { getDataCollection, getDataCollectionForId, setDataCollection, updateDataCollection, deleteDataCollection } = dbFunction;

router.get("/aboutcompany", async(req, res) => {
   var data = await getDataCollection('AboutCompany');
   res.json({data});
});

router.get("/aboutcompany/:id", async(req, res) => {
   console.log(req.params.id);
    var data = await getDataCollectionForId('AboutCompany', req.params.id);
    res.json({data});
 });

router.post("/aboutcompany", async(req, res) => {
    let idGenereted = generalFunctions.randomId(req.body.title, req.body.subtitle);
    req.body.id = idGenereted;
    await setDataCollection('AboutCompany', idGenereted, req.body);
    res.json({status: 1});
 });

 router.patch("/aboutcompany", async(req, res) => {
    var dataUpdate = await updateDataCollection('AboutCompany', req.body.id, req.body);
    res.json({status: dataUpdate});
 });

 router.delete("/aboutcompany", async(req, res) => {
    var dataDelete = await deleteDataCollection('AboutCompany', req.body.id);
    res.json({status: dataDelete});
 });
 
module.exports = router;