const express = require('express');
const router = express.Router();

//Functions
const generalFunctions = require("../utils/generalFunction");
const dbFunction = require('../utils/dbFunctions');
const { getDataCollection, getDataCollectionForId, setDataCollection, updateDataCollection, deleteDataCollection } = dbFunction;

router.get("/sendmethods", async(req, res) => {
   var data = await getDataCollection('SendMethods');
   res.json({data});
});

router.get("/sendmethods/:id", async(req, res) => {
   console.log(req.params.id);
    var data = await getDataCollectionForId('SendMethods', req.params.id);
    res.json({data});
 });

router.post("/sendmethods", async(req, res) => {
    let idGenereted = generalFunctions.randomId(req.body.title, req.body.description);
    req.body.id = idGenereted;
    await setDataCollection('SendMethods', idGenereted, req.body);
    res.json({status: 1});
 });

 router.patch("/sendmethods", async(req, res) => {
    var dataUpdate = await updateDataCollection('SendMethods', req.body.id, req.body);
    res.json({status: dataUpdate});
 });

 router.delete("/sendmethods", async(req, res) => {
    var dataDelete = await deleteDataCollection('SendMethods', req.body.id);
    res.json({status: dataDelete});
 });
 
module.exports = router;