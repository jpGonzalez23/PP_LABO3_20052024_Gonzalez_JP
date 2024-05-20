/**
 * The function "leer" reads and parses a value from the localStorage based on the provided key.
 * @param clave - The parameter "clave" in the provided function is a key used to retrieve data from
 * the localStorage.
 * @returns The `leer` function is returning the value stored in the `localStorage` with the key
 * specified by the `clave` parameter after parsing it as JSON.
 */
export function leer(clave) {
    return JSON.parse(localStorage.getItem(clave));
}

/**
 * The function "escribir" stores a key-value pair in the browser's local storage after converting the
 * value to a JSON string.
 * @param clave - The "clave" parameter in the function "escribir" is a key that will be used to store
 * the value in the local storage.
 * @param valor - The `valor` parameter in the `escribir` function is the value that you want to store
 * in the browser's `localStorage`. This value can be of any data type - string, number, object, array,
 * etc. Before storing it in the `localStorage`, the value is converted to
 */
export function escribir(clave, valor) {
    localStorage.setItem(clave, JSON.stringify(valor));
}

/**
 * The function `limpiar` removes an item from the localStorage based on the provided key.
 * @param clave - The parameter `clave` in the `limpiar` function is a key used to identify and remove
 * an item from the localStorage.
 */
export function limpiar(clave) {
    localStorage.removeItem(clave);
}

/**
 * The function `jsonToObject` parses a JSON string into a JavaScript object.
 * @param jsonString - A JSON string that you want to convert into a JavaScript object.
 * @returns The function `jsonToObject` returns an object created by parsing the input `jsonString`
 * using `JSON.parse`.
 */
export function jsonToObject(jsonString) {
    return JSON.parse(jsonString);
}

/**
 * The function `objectToJson` converts a JavaScript object to a JSON string.
 * @param objeto - The `objeto` parameter in the `objectToJson` function is an object that you want to
 * convert to a JSON string using `JSON.stringify`.
 * @returns The function `objectToJson` is returning a JSON string representation of the input object
 * `objeto`.
 */
export function objectToJson(objeto) {
    return JSON.stringify(objeto);
}