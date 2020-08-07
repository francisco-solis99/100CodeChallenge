/*
    Dia 16 
    Te diste cuenta de que muchas veces hacemos cálculos que son con más de dos valores, quiero que crees el algoritmo para programar una calculadora a la que le puedas agregar tantos números como tú requieras, deberá servir para adiciones y multiplicaciones

*/

    let bottons = [];
    for(let i = 0; i < 10; i += 1){
        bottons[i] = document.querySelector(`.calc__${i}`);
    }

    const suma = document.querySelector('.calc__sum');
    const mult = document.querySelector('.calc__mult');
    const ce = document.querySelector('.calc__ce');
    const  resultado = document.querySelector('.pantalla');

    
    for(let i = 0; i < bottons.length; i+=1){
        bottons[i].onclick  = () => {
            resultado.innerHTML += i;
        }
    }

    // function addValue(value){
    //     let cache = 0;
    //     if(i === 1){
    //         resultado.innerHTML +=  value;
    //     }
    // }



    // queyselector !== getelementByClassName

// console.log(bottons);
// console.log(suma);
// console.log(mult);
// console.log(resultado);





