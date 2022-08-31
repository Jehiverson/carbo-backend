const express = require('express');
const router = express.Router();

//Functions
const generalFunctions = require("../utils/generalFunction");
const dbFunction = require('../utils/dbFunctions');
const { getDataCollection, getDataCollectionForId, setDataCollection, updateDataCollection, deleteDataCollection } = dbFunction;

router.get("/products", async(req, res) => {
   var data = await getDataCollection('Products');
   res.json({data});
});

router.get("/products/:id", async(req, res) => {
   console.log(req.params.id);
    var data = await getDataCollectionForId('Products', req.params.id);
    res.json({data});
 });

router.post("/products", async(req, res) => {
    let idGenereted = generalFunctions.randomId(req.body.title, req.body.subtitle);
    req.body.id = idGenereted;
    await setDataCollection('Products', idGenereted, req.body);
    res.json({status: 1});
 });

 router.patch("/products", async(req, res) => {
    var dataUpdate = await updateDataCollection('Products', req.body.id, req.body);
    res.json({status: dataUpdate});
 });

 router.delete("/products", async(req, res) => {
    var dataDelete = await deleteDataCollection('Products', req.body.id);
    res.json({status: dataDelete});
 });
 
module.exports = router;