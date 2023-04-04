// con query opcional
const express = require('express');
const { ro } = require('faker/lib/locales');
const router = express.Router();
router.get('',(req,res)=>{
  const {limit,offset}=req.query;
  if(limit && offset){
    res.json({
      limit,
      offset
    })
  }
  res.send("no existen params")
})

module.exports = router;
