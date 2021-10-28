const PalavrasModel = require('../model/palavrasModel');


const PalavrasControle = {
    getPalavra: async (dificuldade) => {
        const palavras = await PalavrasModel.findAll({ where: { dificuldade: dificuldade }});
        
        return palavras[pegarAleatorio(palavras.length)];
    }

}

function pegarAleatorio(max) {
    const nMin = Math.ceil(0);
    const nMax = Math.floor(max);

    return Math.floor(Math.random() * (nMax-nMin)) + nMin;
}
module.exports = PalavrasControle;