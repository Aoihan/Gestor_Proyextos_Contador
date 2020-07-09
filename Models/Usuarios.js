const sequelize = require('./Db');
const Sequelize = require('sequelize');


const Usuario = sequelize.define('usuario', {
    id: {type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true},
    nombre: {type:Sequelize.STRING, allowNull: false},
    password: {type:Sequelize.STRING,unique:true, allowNull: false},
    email: {type:Sequelize.STRING , allowNull: false , unique:true},
    
});

module.exports = Proyecto;