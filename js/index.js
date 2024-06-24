import Planeta from './planeta.js';
import { leer, escribir, limpiar, jsonToObject, objectToJson } from './local_storage.js';
import { MostrarSpinner, ocultarSpinner } from "./spinners.js"

const key_storage = 'planetas';
let items = [];

const formulario = document.getElementById("form-item");
const btnGuardar = document.getElementById('btnGuardar')
const btnModificar = document.getElementById('btnModificar')
const btnEliminar = document.getElementById('btnEliminar');
const btnCancelar = document.getElementById('btnCancelar');
const Modal = document.getElementById('btnModal');


document.addEventListener("DOMContentLoaded", onInit);
document.addEventListener("click", handlerClick);

btnCancelar.addEventListener("click", CerrarModal);
Modal.addEventListener("click", MostrarModal);

btnEliminar.addEventListener("click", BotonEleminar);

function onInit() {
    loadItems();
}

function loadItems() {
    
}

function handlerClick(e) {
    if(e.target.matches('td')) {
        let idMathc = e.target.parentNode.firstChild;

        const item = item.filter((dato) => dato.id == idMathc.firstChild.textContent)[0];

        CargarDatos(formulario, item);
        ModificarBotones(true);
        MostrarModal();
    }
    else if(!e.target.matches('input') && !e.target.matches('select' ) && !e.target.matches('button')) {
        ModificarBotones(false);
        ActualizarFormulario();
    }
}

function ModificarBotones(habilitar = false) {
    if(habilitar) {
        btnEliminar.setAttribute('class');
    }
    else {
        btnEliminar.setAttribute();
    }
}

async function BotonEleminar(e) {

}

function CargarDatos(form, datos) {
    form.id.value = datos.id;
    form.nombre.value = datos.nombre;
    form.tamanio.value = parseInt(datos.tamanio);
    form.masa.value = datos.masa;
    form.distanciaAlSol.value = parseInt(datos.distanciaAlSol);
    form.presentaVida.value = datos.presentaVida === 'si';
    form.presentaAnillo.value = datos.presentaAnillo === 'si';

    form.composicionAtmosferica.value = datos.composicionAtmosferica;

    const tipoSelect = form.tipo;
    for(let i = 0; i < tipoSelect.options.length; i++) {
        if(tipoSelect.options[i].value == datos.tipo) {
            tipoSelect.selecIndex = i;
            break;
        }
    }
}

async function loadItems() {
    MostrarSpinner();

    let str = await leer(key_storage);

    ocultarSpinner();

    const objetos = jsonToObject(str) || [];

    objetos.forEach(obj => {
        const model = new Planeta(
            obj.id,
            obj.nombre,
            obj.tamanio,
            obj.masa,
            obj.tipo,
            obj.distanciaAlSol,
            obj.presentaAnillo,
            obj.presentaVida,
            obj.composicionAtmosferica
        );
        items.push(model);
    });

    RellenarTabla();
}

function RellenarTabla() {
    const celdas = ['id', 'nombre', 'masa', 'tipo', 'distanciaAlsol', 'presentaVida', 'presentaAnillos', 'composicionAtmoferica', 'acciones']
    const tbody = document.querySelector("tbody");

    while(tbody.firstChild) {
        tbody.removeChild(tbody.firstChild);
    }

    items.forEach((items) => {
        let filaNueva = document.createElement("tr");
        celdas.forEach((celdas) => {
            let celdaNueva = document.createElement('td');
            if(celdaNueva === 'id') {
                celdaNueva.style.display = 'none';
            }

            if(celdas === 'acciones') {
                let btnModificar = document.createElement('button');
                btnModificar.textContent = "Modificiar";
                btnModificar.setAttribute();
                btnModificar.addEventListener('click', () => {
                    CargarDatos(formulario, item);
                    ModificarBotones(true);
                    MostrarModal();
                })
                celdaNueva.appendChild(btnModificar);
            }
        });
    });
}