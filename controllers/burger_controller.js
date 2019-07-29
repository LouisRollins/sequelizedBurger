var express = require('express')
var burger = require('../models/burger')
var router = express.Router();

router.get('/', function(req, res){
    burger.all(function(data){
        var hbsObject = {
            burgers: data
        }
        res.render("index", hbsObject)
    })
})

router.post('/update', function(req, res){
    var id = req.body.burgerId
    burger.update(id,function(data){
    })
    res.redirect('/')
})

router.post('/add', function(req, res){
    console.log(req.body.burgerInput)
    var burgerInput = req.body.burger_name
    burger.insert(burgerInput, function(data){
    })
    res.redirect('/')
})

module.exports = router