const numberUser = Number(prompt(`Digite um número:`))

const tabuadaNumeros = [1, 2 , 3, 4, 5, 6, 7, 8, 9 ,10]


for(let i in tabuadaNumeros){
    const resultado = numberUser * tabuadaNumeros[i]
    console.log(`${numberUser} x ${tabuadaNumeros[i]} = ${resultado}`); 
}










