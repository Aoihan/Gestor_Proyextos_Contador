const sequelize = require('./Db');
const Sequelize = require('sequelize');


const Proyecto = sequelize.define('proyecto', {
    id: {type: Sequelize.INTEGER, primaryKey: true},
    nombre: Sequelize.STRING,
    descripcion: Sequelize.STRING
    
});

module.exports = Proyecto;