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

module.exports = burger

module.exports = function(sequelize, DataTypes) {
    var Burger = sequelize.define("Burger", {
      burger_name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1, 140]
        }
      },
      devoured: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
      }
    });
    return Burger;
  };
  