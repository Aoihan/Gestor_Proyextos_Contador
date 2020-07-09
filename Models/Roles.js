const sequelize = require('./Db');
const Sequelize = require('sequelize');

const Rol = sequelize.define('rol', {
    id: {type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true},
    nombre: {type:Sequelize.STRING, allowNull: false},
    permisos:{type:Sequelize.STRING(1000), allowNull:true}
});