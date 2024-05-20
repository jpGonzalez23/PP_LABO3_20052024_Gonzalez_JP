import Planeta from './planeta.js';
import { leer } from './local_storage.js';

const formulario = document.getElementById("form-item");

document.addEventListener("DOMContentLoaded", onInit);

function onInit() {

}

function loadItems() {
    
}

function handlerClick(e) {
    formulario.addEventListener("submit", (e) => {
        e.preventDefault();

        const model = new Planeta (
            formulario.querySelector("#id"),
            formulario.querySelector("#nombre"),
            formulario.querySelector('#tamanio'),
            formulario.querySelector('#masa'),
            formulario.querySelector('#tipo'),
            formulario.querySelector('#distanciaAlSol'),
            formulario.querySelector('#poseeAnillo'),
            formulario.querySelector('#poseeVida'),
            formulario.querySelector('#composicionAtmosferica')
        );

        
    });
}

function rellenarTabla() {
}