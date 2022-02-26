'use strict';

const display = document.getElementById('display');
const numeros = document.querySelectorAll('[id*=tecla]'); /* chamar as teclas para a variavel ' * '=> qualquer elemento que tenha como atributo tecla. */
const operadores = document.querySelectorAll('[id*=operador]');

let novoNumero = true;
let operador;
let numeroAnterior;

const operacaoPendente = () => operador !== undefined;

const calcular = () =>{
    if (operacaoPendente()){
        const numeroAtual = parseFloat(display.textContent);
        if (operador == '+'){
           atDisplay(numeroAnterior + numeroAtual);
        }
    }
}

const atDisplay = (texto) =>{
   if (novoNumero) {
       display.textContent = texto;
       novoNumero = false;
   }else{
       display.textContent += texto;
   }
   
    
}

// criar um evento para cada um dos numeros // 
const inserirNumero = (evento) => atDisplay(evento.target.textContent);

numeros.forEach(numero =>  numero.addEventListener('click', inserirNumero));// pegar um 'numero' e adicionar um click

const selecionarOperador = (evento) =>{
    if (!novoNumero) {
        
    novoNumero = true;
    operador = evento.target.textContent;
    numeroAnterior = parseFloat(display.textContent);
    
    }
}
operadores.forEach(operador => operador.addEventListener('click', selecionarOperador));// pegar um 'numero' e adicionar um click


