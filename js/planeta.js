import PlanetaBase from "./planetaBase.js";

export default class Planeta extends PlanetaBase {
    constructor(id, nombre, tamanio, masa, tipo, distanciaSol, poseeAnillo, poseeVida, compocionAtmosferica) {
        super(id, nombre, tamanio, masa, tipo);
        this.distanciaSol = distanciaSol;
        this.poseeAnillo = poseeAnillo;
        this.poseeVida = poseeVida;
        this.compocionAtmosferica = compocionAtmosferica;
    }
}