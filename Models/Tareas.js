  const sequelize = require('./Db');
const Sequelize = require('sequelize');


const Tarea = sequelize.define('tarea', {
    id: {type: Sequelize.INTEGER, primaryKey: true},
    nombre: Sequelize.STRING,
    descripcion: Sequelize.STRING
    
});

module.exports = Proyecto;