/*
    Dia 16 
    Te diste cuenta de que muchas veces hacemos cálculos que son con más de dos valores, quiero que crees el algoritmo para programar una calculadora a la que le puedas agregar tantos números como tú requieras, deberá servir para adiciones y multiplicaciones

*/

    //Capturando botones
    let bottons = [];
    for(let i = 0; i < 10; i += 1){
        bottons[i] = document.querySelector(`.calc__${i}`);
    }

    //capturando operadores o signos
    const suma = document.querySelector('.calc__sum');
    const mult = document.querySelector('.calc__mult');
    const ce = document.querySelector('.calc_ce');
    const  display = document.querySelector('.pantalla');
    const  result = document.querySelector('.calc__equal');
    const  dot = document.querySelector('.calc__dot');
    

    //BOTONES
    for(let i = 0; i < bottons.length; i+=1){
        bottons[i].onclick  = () => {
            display.innerHTML += i;
        }
    }

    //SUMA
    suma.onclick  = () => {
        // let cadena = display.textContent;
         // console.log(cadena[cadena.length - 1]);

        if(display.textContent[display.textContent.length - 1] === '*') {
            alert("Un signo a la vez");
        }
        else{
            display.innerHTML += '+';
        }
    }

    //MULTIPLICACION
    mult.onclick  = () => {
        if(display.textContent[display.textContent.length - 1] === '+') {
            alert("Un signo a la vez");
        }
        else{
            display.innerHTML += '*';
        }
    }

    //BORRAR TODO
    ce.onclick  = () => {
        display.textContent = '';
    }

    //PUNTO DECIMAL
    dot.onclick  = () => {
        display.textContent += '.';
    }
    
    //RESULTADO EN PANTALLA
    result.onclick  = () => {
        console.log(eval(display.textContent));
        display.innerHTML = eval(display.textContent).toFixed(3); //a tres decimales solamente
    }

    


    // queyselector !== getelementByClassName

// console.log(bottons);
// console.log(suma);

// console.log(resultado);





