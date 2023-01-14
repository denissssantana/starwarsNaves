/* milenuim falcom */

fetch('https://swapi.dev/api/starships/10').then(response =>{
    return response.json()
}).then(corpo=>{
    document.getElementById("modelo").innerHTML=corpo.model
})

fetch('https://swapi.dev/api/starships/10').then(response =>{
    return response.json()
}).then(corpo=>{
    document.getElementById("comprimento").innerHTML=corpo.length
})

fetch('https://swapi.dev/api/starships/10').then(response =>{
    return response.json()
}).then(corpo=>{
    document.getElementById("velocidade").innerHTML=corpo.max_atmosphering_speed
})

fetch('https://swapi.dev/api/starships/10').then(response =>{
    return response.json()
}).then(corpo=>{
    document.getElementById("tripulacao").innerHTML=corpo.crew
})

fetch('https://swapi.dev/api/starships/10').then(response =>{
    return response.json()
}).then(corpo=>{
    document.getElementById("passageiros").innerHTML=corpo.passengers
})


/* x-wing */

fetch('https://swapi.dev/api/starships/12').then(response =>{
    return response.json()
}).then(corpo=>{
    document.getElementById("modelo12").innerHTML=corpo.model
})

fetch('https://swapi.dev/api/starships/12').then(response =>{
    return response.json()
}).then(corpo=>{
    document.getElementById("comprimento12").innerHTML=corpo.length
})

fetch('https://swapi.dev/api/starships/12').then(response =>{
    return response.json()
}).then(corpo=>{
    document.getElementById("velocidade12").innerHTML=corpo.max_atmosphering_speed
})

fetch('https://swapi.dev/api/starships/12').then(response =>{
    return response.json()
}).then(corpo=>{
    document.getElementById("tripulacao12").innerHTML=corpo.crew
})

fetch('https://swapi.dev/api/starships/12').then(response =>{
    return response.json()
}).then(corpo=>{
    document.getElementById("passageiros12").innerHTML=corpo.passengers
})


/* star death star */

fetch('https://swapi.dev/api/starships/9').then(response =>{
    return response.json()
}).then(corpo=>{
    document.getElementById("modelo9").innerHTML=corpo.model
})

fetch('https://swapi.dev/api/starships/9').then(response =>{
    return response.json()
}).then(corpo=>{
    document.getElementById("comprimento9").innerHTML=corpo.length
})

fetch('https://swapi.dev/api/starships/9').then(response =>{
    return response.json()
}).then(corpo=>{
    document.getElementById("velocidade9").innerHTML=corpo.max_atmosphering_speed
})

fetch('https://swapi.dev/api/starships/9').then(response =>{
    return response.json()
}).then(corpo=>{
    document.getElementById("tripulacao9").innerHTML=corpo.crew
})

fetch('https://swapi.dev/api/starships/9').then(response =>{
    return response.json()
}).then(corpo=>{
    document.getElementById("passageiros9").innerHTML=corpo.passengers
})


/* star destroyer */

fetch('https://swapi.dev/api/starships/3').then(response =>{
    return response.json()
}).then(corpo=>{
    document.getElementById("modelo3").innerHTML=corpo.model
})

fetch('https://swapi.dev/api/starships/3').then(response =>{
    return response.json()
}).then(corpo=>{
    document.getElementById("comprimento3").innerHTML=corpo.length
})

fetch('https://swapi.dev/api/starships/3').then(response =>{
    return response.json()
}).then(corpo=>{
    document.getElementById("velocidade3").innerHTML=corpo.max_atmosphering_speed
})

fetch('https://swapi.dev/api/starships/3').then(response =>{
    return response.json()
}).then(corpo=>{
    document.getElementById("tripulacao3").innerHTML=corpo.crew
})

fetch('https://swapi.dev/api/starships/3').then(response =>{
    return response.json()
}).then(corpo=>{
    document.getElementById("passageiros3").innerHTML=corpo.passengers
})



