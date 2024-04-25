const convertendo = document.querySelector(".botao-converter")
const moedaDe = document.querySelector(".Moedas-de")
const moedaPara = document.querySelector(".Moeda-para")


function converterValor() {
    const inputDigitar = document.querySelector(".digitar-valor").value
    const realHj = 1.0
    const dolarHj = 5.2
    const euroHj = 5.55
    const libraHj = 6.5
    const IenenHj = 0.033
    //const valorConvertido = inputDigitar / dolarHj
    const valorAtual = document.querySelector(".valor-moeda1")
    const valorTroca = document.querySelector(".valor-moeda2")


    if (moedaPara.value == "real") {
        valorAtual.innerHTML = new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        }).format(inputDigitar)
    }

    if (moedaPara.value == "real") {
        valorTroca.innerHTML = new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        }).format(inputDigitar / realHj)
    }

    if (moedaPara.value == "dolar") {
        valorTroca.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
        }).format(inputDigitar / dolarHj)
    }

    if (moedaPara.value == "euro") {
        valorTroca.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR",
        }).format(inputDigitar / euroHj)

    }

    if (moedaPara.value == "libra") {
        valorTroca.innerHTML = new Intl.NumberFormat('en-GB', {
            style: 'currency',
            currency: "GBP",
        }).format(inputDigitar / libraHj)

    }

    if (moedaPara.value == "iene") {
        valorTroca.innerHTML = new Intl.NumberFormat('ja-JP', { 
            style: 'currency', 
            currency: 'JPY' 
        }).format(inputDigitar / IenenHj)
    }

    

    valorAtual.innerHTML = new Intl.NumberFormat('pt-BR',{
            style: 'currency',
            currency: 'BRL'
        }).format(inputDigitar)


    //valorTroca.innerHTML = new Intl.NumberFormat("en-US",
    //{ style: "currency", currency: "USD", }).format(valorConvertido)
}

function trocaNomeMoeda() {
    const novoNome = document.querySelector(".moeda-Nova")
    const logoConvertida = document.querySelector(".logo-moeda-convertida")
    if (moedaPara.value == "dolar") {
        novoNome.innerHTML = "Dólar americano"
        logoConvertida.src = "./assets/dolar.png"
    }

    if (moedaPara.value == "real") {
        novoNome.innerHTML = "Real"
        logoConvertida.src = "./assets/real.png"
    }

    if (moedaPara.value == "euro") {
        novoNome.innerHTML = "Euro"
        logoConvertida.src = "./assets/euro.png"
    }

    if (moedaPara.value == "libra") {
        novoNome.innerHTML = "Libra Esterlina"
        logoConvertida.src = "./assets/libra.png"
    }

    if (moedaPara.value == "iene") {
        novoNome.innerHTML = "Iene JYP"
        logoConvertida.src = "./assets/JYP.png"
    }


    converterValor()
}

moedaPara.addEventListener("change", trocaNomeMoeda)
convertendo.addEventListener("click", converterValor)










