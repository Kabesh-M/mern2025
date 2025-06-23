const express=require('express');
const { getRoute, postRoute, putRoute, deleteRoute } = require('../controllers/egControllers');
const router=express.Router();
router.get('/get', getRoute);
router.post('/post', postRoute);
router.put('/put/:id', putRoute);
router.delete('/delete/:id', deleteRoute);
module.exports=router