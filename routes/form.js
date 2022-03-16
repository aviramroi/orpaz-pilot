const express = require("express");
const router = express.Router();
const Forms = require('../models/Form');
const Reports = require('../models/Reports');


router.get("/:id", (req, res) => {
    const {id} = req.params
    Forms.findById(id, (err, data) => {
        if(err) res.send(err)
        res.send(data)
    })
});


router.get("/:id/answers", (req, res) => {
    const {id} = req.params
    Reports.find({formId:id}, (err, data) => {
        if(err) res.send(err)
        res.send(data)
    })
});


router.post('/:id/answers',(req,res)=>{
    const {id} = req.params
    const payload = req.body
    Forms.findById(id, (err, data) => {
        if(err) res.send(err)
        if(Array.isArray(payload)){
            payload.forEach((record)=>{
                const report = new Reports({formId:id,answers:record,createdAt:new Date(),createdBy:req.user || 'test user'})
                report.save()
            })
        }else{
            const report = new Reports({formId:id,answers:payload,createdAt:new Date(),createdBy:req.user|| 'test user'})
            report.save()
        }
        res.send("succeed")
    })

})


module.exports = router;