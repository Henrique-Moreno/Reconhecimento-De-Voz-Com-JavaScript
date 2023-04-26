const menorValor = 1
const maiorValor = 1000
const numeroSecreto = gerarNumeroAleatorio()

function gerarNumeroAleatorio() {
   return parseInt(Math.random() * maiorValor +1)
}

console.log(numeroSecreto)

const elemebtoMenorValor = document.getElementById('menor-valor')

elemebtoMenorValor.innerHTML = menorValor

const elemebtoMaiorValor = document.getElementById('maior-valor')

elemebtoMaiorValor.innerHTML = maiorValor