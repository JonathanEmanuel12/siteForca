const PalavrasModel = require('../model/palavrasModel');


const PalavrasControle = {
    getPalavras: async (dificuldade) => {
        const palavras = await PalavrasModel.findAll({ where: { dificuldade: dificuldade }});
        const palavrasSelecionadas = [];
        for (let i = 0; i < 3; i++) {
            palavrasSelecionadas[i] = (palavras[pegarAleatorio(palavras.length)]);
        }
        return palavrasSelecionadas;
    }
//impedir que vá a mesma palavra
}

function pegarAleatorio(max) {
    const nMin = Math.ceil(0);
    const nMax = Math.floor(max);

    return Math.floor(Math.random() * (nMax-nMin)) + nMin;
}
module.exports = PalavrasControle;