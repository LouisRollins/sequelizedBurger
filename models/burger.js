var orm = require('../config/orm')

var burger = {
    all: function(cb){
        orm.selectAll("burgers", function(res){
            cb(res)
            
        })
    },
    insert: function(burgerInput, cb){
        orm.insertOne(burgerInput, function(res){
            cb(res)
        })
    },
    update: function(id, cb){
        orm.updateOne(id, function(res){
            cb(res)
        })
    }
}

// var id= $(this).attr('data-type')
module.exports = burger