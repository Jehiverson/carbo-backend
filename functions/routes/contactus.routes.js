const express = require('express');
const router = express.Router();

//Functions
const generalFunctions = require("../utils/generalFunction");
const dbFunction = require('../utils/dbFunctions');
const { getDataCollection, getDataCollectionForId, setDataCollection, updateDataCollection, deleteDataCollection } = dbFunction;

router.get("/contactus", async(req, res) => {
   var data = await getDataCollection('ContactUs');
   res.json({data});
});

router.get("/contactus/:id", async(req, res) => {
   console.log(req.params.id);
    var data = await getDataCollectionForId('ContactUs', req.params.id);
    console.log(data)
    res.json({data});
 });

/*This function is comment because we never created another Abuout Description*/
/* router.post("/aboutus", async(req, res) => {
    let idGenereted = generalFunctions.randomId(req.body.title, req.body.subtitle);
    req.body.id = idGenereted;
    await setDataCollection('Aboutus', idGenereted, req.body);
    res.json({status: 1});
 }); */

 router.patch("/contactus", async(req, res) => {
    var dataUpdate = await updateDataCollection('ContactUs', req.body.id, req.body);
    res.json({status: dataUpdate});
 });

 /*This function is comment because we never delete another Abuout Description*/
/*  router.delete("/aboutus", async(req, res) => {
    var dataDelete = await deleteDataCollection('Aboutus', req.body.id);
    res.json({status: dataDelete});
 }); */
 
module.exports = router;