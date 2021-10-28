const {DataTypes} = require('sequelize');
const sequelize = require('./db');

const difIniciante = 1;
const difIntermediario = 2;
const difAvancado = 3;

const Palavras = sequelize.define('Palavra', {
    palavra: {
        type: DataTypes.STRING,
        allowNull: false
    },
    dificuldade: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, { timestamps: false });

async function criarTabelaPalavras() {
    await sequelize.sync();
}

criarTabelaPalavras();

module.exports = Palavras;