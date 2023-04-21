const express = require('express')
const CartController = require('../controller/user.model')
const router = express.Router()


router.get('/',CartController.getUser)
// (req,res)=>{
//     res.status(200).json({
//         msg:"This is GET request for Cart"
//     })
// })

router.post('/',CartController.createUser)
// (req,res)=>{
//     res.status(200).json({
//         msg:"This is POST request for Cart"
//     })
// })

router.get('/:userId',CartController.getUserById)
// (req,res)=>{
//     res.status(200).json({
//         msg:"This is GET request for single Cart"
//     })
// })

router.put('/:userId',CartController.updateUser)
// (req,res)=>{
//     const id = req.params.CartId
//     res.status(200).json({
//         msg:"This is PUT request for single Cart",
//         id: id
//     })
//})

router.delete('/:userId',CartController.deleteUser)
// (req,res)=>{
//     const id = req.params.CartId
//     res.status(200).json({
//         msg:"This is Delete request for single Cart",
//         id: id
//     })
//})


module.exports = router