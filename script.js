function showResult(mostraResultado,index) {
    
    const resultados = document.getElementById("results")

    const paragraph = document.createElement("p")

    paragraph.innerText = `${index + 2} : ${mostraResultado}`

    resultados.appendChild(paragraph)
}


function rollDices() {
   
    let resultRollDices = [0,0,0,0,0,0,0,0,0,0,0]

    for (let i = 1; i <=1000 ; i++) {
       
        let rollDiceOne = Math.floor(Math.random() * 6 + 1) 
   
        let rollDiceTwo = Math.floor(Math.random() * 6 + 1) 
    
        let somaRollDice = rollDiceTwo + rollDiceOne

        resultRollDices[somaRollDice-2] += 1
        
      
    }
    
    for (let i=0; i<resultRollDices.length; i++) {
        
        const tamanho = resultRollDices[i]/2

        const resultados = document.getElementById("results")

        const grafico = document.createElement("div")

        grafico.innerText = resultRollDices[i]
                
        grafico.style.backgroundColor = "#2E8BC0"

        grafico.style.width = `${tamanho}%`

        resultados.appendChild(grafico)
    }    
    
    for (let i=0; i<11; i++) {
        showResult(resultRollDices[i],i)
    }

    
}


rollDices()

    

// criaDivs(rollDices())




