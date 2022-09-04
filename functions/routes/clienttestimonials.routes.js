const express = require('express');
const router = express.Router();

//Functions
const generalFunctions = require("../utils/generalFunction");
const dbFunction = require('../utils/dbFunctions');
const { getDataCollection, getDataCollectionForId, setDataCollection, updateDataCollection, deleteDataCollection } = dbFunction;

router.get("/clientTestimonials", async(req, res) => {
   var data = await getDataCollection('ClientTestimonials');
   res.json({data});
});

router.get("/clientTestimonials/:id", async(req, res) => {
   console.log(req.params.id);
    var data = await getDataCollectionForId('ClientTestimonials', req.params.id);
    res.json({data});
 });

router.post("/clientTestimonials", async(req, res) => {
    let idGenereted = generalFunctions.randomId(req.body.title, req.body.subtitle);
    req.body.id = idGenereted;
    await setDataCollection('ClientTestimonials', idGenereted, req.body);
    res.json({status: 1});
 });

 router.patch("/clientTestimonials", async(req, res) => {
   console.log(req.body);
    var dataUpdate = await updateDataCollection('ClientTestimonials', req.body.id, req.body);
    res.json({status: dataUpdate});
 });

 router.delete("/clientTestimonials", async(req, res) => {
    var dataDelete = await deleteDataCollection('ClientTestimonials', req.body.id);
    res.json({status: dataDelete});
 });
 
module.exports = router;