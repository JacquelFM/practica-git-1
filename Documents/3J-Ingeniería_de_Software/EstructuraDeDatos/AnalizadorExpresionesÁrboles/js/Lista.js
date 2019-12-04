export default class Lista {
    constructor() {
        this._primerNodo = null
        this._ultimoNodo = null
    }

    agregarNodo(nodo) {
        if (this._primerNodo == null) {
            this._primerNodo = nodo;
            this._ultimoNodo = nodo;
            this._primerNodo.sig = this._ultimoNodo;

            console.log(this._primerNodo);

        } else {
            this._ultimoNodo.sig = nodo;
            nodo.ant = this._ultimoNodo;
            this._ultimoNodo = nodo;

        }

    }


    mostrarNodos() {
        let inicio = this._primerNodo;

        console.log(inicio.valor);

        while (inicio.sig != null) {
            inicio = inicio.sig;
            console.log(inicio.valor);
        }

    }

    pruebaNodos() {

        let inicio = this._primerNodo;

        console.log(inicio.valor);

        while (inicio.sig != null) {
            inicio = inicio.sig;
            console.log(inicio.valor);

            if (inicio.valor == "/" || inicio.valor == "*") {
                console.log("División-Multiplicación" + inicio.valor);

                inicio.hizq = inicio.ant;
                inicio.hder = inicio.sig;
                inicio.sig.sig.ant = inicio;
                inicio.sig = inicio.sig.sig;

                inicio.ant.ant.sig = inicio;
                inicio.ant = inicio.ant.ant;

            }
        }

        console.log(this._primerNodo);

        // this.mostrarNodos();


        inicio = this._primerNodo;

        while (inicio.sig != null) {
            inicio = inicio.sig;
            console.log(inicio.valor);

            if (inicio.valor == "+" || inicio.valor == "-") {
                console.log("Suma - Resta: " + inicio.valor);

                inicio.hizq = inicio.ant;
                inicio.hder = inicio.sig;

                console.log(inicio);

                if (inicio.sig.sig != null && inicio.ant.ant != null) {
                    inicio.sig.sig.ant = inicio;
                    inicio.sig = inicio.sig.sig;

                    inicio.ant.ant.sig = inicio;
                    inicio.ant = inicio.ant.ant;

                }



            }
        }

        console.log(this._primerNodo);


    }


}