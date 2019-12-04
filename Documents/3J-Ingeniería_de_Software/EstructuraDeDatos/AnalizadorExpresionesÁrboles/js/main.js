import Nodo from "./Nodo.js";
import Lista from "./Lista.js";


class Main {
    constructor() {
        this._lista = new Lista()

        document.getElementById('calcular').addEventListener('click', () => {
            let expre = document.getElementById('expresion').value;

            console.log(expre.length);

            for (let i = 0; expre.length > i; i++) {

                let valor = expre.charAt(i);
                let nuevoNodo = new Nodo(valor)
                this._lista.agregarNodo(nuevoNodo)

            }

            // this._lista.mostrarNodos();

            this._lista.pruebaNodos();

        });
    }
}

let m = new Main();