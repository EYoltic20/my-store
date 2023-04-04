
const express = require('express')
const router = express.Router();
router.get('/:categoryid/products/:id',(req,res)=>{
  const {cid,id}=req.params
  res.json({
    cid,
    id,
    name:"tortugas"
  })
})

module.exports = router
