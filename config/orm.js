var connection = require("./connection.js");

var orm = {
    selectAll: function(tableInput, cb){
        var queryString = "SELECT * FROM "+ tableInput + ";"
        connection.query(queryString, function(err, result){
            if (err) throw err
            cb(result)
            
        })
    },

    insertOne: function(newBurger, cb){
        console.log("new burger: "+newBurger)
        var queryString = "INSERT INTO burgers(burger_name) VALUES (?)"
        connection.query(queryString, [newBurger], function(err, result){
            if (err) throw err
            cb(result)
        })
    },

    updateOne: function(whereToInsert, cb){
        var queryString = "UPDATE burgers SET devoured = 1 WHERE id = ?"
        connection.query(queryString, whereToInsert, function(err, result){
            if (err) throw err
            cb(result)
        })
    }
}

module.exports = orm