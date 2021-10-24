
const PalavrasControle = {
    getPalavra: (dificuldade) => {
        if(dificuldade == 1){ return {palavra: "Carro"}; }
        if(dificuldade == 2){ return {palavra: "Cigarra"}; }
        if(dificuldade == 3){ return {palavra: "Voltímetro"}; }
    }

}

module.exports = PalavrasControle;