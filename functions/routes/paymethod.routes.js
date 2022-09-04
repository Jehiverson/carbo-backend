const express = require('express');
const router = express.Router();

//Functions
const generalFunctions = require("../utils/generalFunction");
const dbFunction = require('../utils/dbFunctions');
const { getDataCollection, getDataCollectionForId, setDataCollection, updateDataCollection, deleteDataCollection } = dbFunction;

router.get("/paymethods", async(req, res) => {
   var data = await getDataCollection('PayMethods');
   res.json({data});
});

router.get("/paymethods/:id", async(req, res) => {
   console.log(req.params.id);
    var data = await getDataCollectionForId('PayMethods', req.params.id);
    res.json({data});
 });

router.post("/paymethods", async(req, res) => {
    let idGenereted = generalFunctions.randomId(req.body.title, req.body.description);
    req.body.id = idGenereted;
    await setDataCollection('PayMethods', idGenereted, req.body);
    res.json({status: 1});
 });

 router.patch("/paymethods", async(req, res) => {
    var dataUpdate = await updateDataCollection('PayMethods', req.body.id, req.body);
    res.json({status: dataUpdate});
 });

 router.delete("/paymethods", async(req, res) => {
    var dataDelete = await deleteDataCollection('PayMethods', req.body.id);
    res.json({status: dataDelete});
 });
 
module.exports = router;