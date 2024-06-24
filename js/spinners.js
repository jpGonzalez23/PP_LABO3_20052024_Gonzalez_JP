export function MostrarSpinner() {
    action(true);
}

export function ocultarSpinner() {
    action();
}

function action(visble = false) {
    const display = visble ? 'flex' : 'none';
    document.getElementById()
}