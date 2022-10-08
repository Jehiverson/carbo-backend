const express = require('express');
const router = express.Router();

//Functions
const generalFunctions = require("../utils/generalFunction");
const dbFunction = require('../utils/dbFunctions');
const { getDataCollection, getDataCollectionForId, setDataCollection, updateDataCollection, deleteDataCollection } = dbFunction;

router.get("/ourmission", async(req, res) => {
   var data = await getDataCollection('OurMission');
   res.json({data});
});

router.get("/ourmission/:id", async(req, res) => {
   console.log(req.params.id);
    var data = await getDataCollectionForId('OurMission', req.params.id);
    res.json({data});
 });

router.post("/ourmission", async(req, res) => {
    let idGenereted = generalFunctions.randomId(req.body.title, req.body.subtitle);
    req.body.id = idGenereted;
    await setDataCollection('OurMission', idGenereted, req.body);
    res.json({status: 1});
 });

 router.patch("/ourmission", async(req, res) => {
    var dataUpdate = await updateDataCollection('OurMission', req.body.id, req.body);
    res.json({status: dataUpdate});
 });

 router.delete("/ourmission", async(req, res) => {
    var dataDelete = await deleteDataCollection('OurMission', req.body.id);
    res.json({status: dataDelete});
 });
 
module.exports = router;