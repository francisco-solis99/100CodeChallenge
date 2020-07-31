/*
    Reto dia 15:
    Debe elegir entre Cilindro, Cubo y Esfera

    Las matemáticas son base fundamental de la lógica y programación, por eso es importante practicarlas constantemente. Un cilindro es un cuerpo geométrico que requiere de varias fórmulas, aplícalas en un programa que reciba datos como su altura y radio de las bases para mostrar el resultado acotado a un decimal.


    Cilindro -> pi * radio * radio * altura
    Cubo -> Lado * Lado * Lado
    Esfera ->  4/3 * pie * radio * radio * radio

*/


const radio = document.querySelector('#radio');
const volumen = document.querySelector('#volumen');
const element = document.querySelector('#element');
const boton = document.querySelector('.button');
 console.log(radio.value);
 console.log(element);


boton.addEventListener('click', getVolume);


 function getVolume() {
    let resultado = 0;
    if(radio.value){
        resultado = (4/3)*(Math.PI)*(Math.pow(radio.value,3));
        boton.classList.add('button-active');
        element.classList.add('esfera__res-active');
        volumen.value = resultado;

    }else{
        alert('Ingresa el radio de la esfera');
        radio.focus();
    }


    

    
}



