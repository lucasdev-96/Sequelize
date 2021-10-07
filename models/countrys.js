'use strict';
const city = (sequelize, DataTypes) => {
  const city = sequelize.define("actor", {
    actor_id:
    { 
      type: DataTypes.INTEGER, 
      primaryKey: true
     },
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
  },
  { 
    timestamps: false, 
    tableName: 'actor' 
  });

  return city;
};

module.exports = city;