const accessMdl = require('../models/accessMdl');

exports.loginCtrl = (req, res) =>{
    console.log("controller 4",req.body)
    accessMdl.loginMdl(req.body).then((data)=>{
        console.log("controller back",typeof data)
        // console.log("controller back",data.length)
        // if(data.length > 0){
            delete data.password
            res.status(200).send({status:true,data:data})
        // } else {
        //     res.status(400).send({status:false,data:err})
        // }
    }).catch((err)=>{
        res.status(400).send({status:false,data:err})
    })
}

exports.updateCtrl = (req,res)=>{
    accessMdl.updateMdl(req.body).then((data)=>{
        res.status(200).send({status:true,data:data})
    }).catch((err)=>{
        res.status(400).send({status:false,data:err})
    })
}