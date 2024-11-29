class Departamento {
    #id = 0;
    #nombre;
    #ubicacion;
    #empleados;

    constructor(nombre, ubicacion) {
        this.#id++;
        this.#nombre = nombre;
        this.#ubicacion = ubicacion;
    }

    toString() {
        let cadena;

        cadena += "Departamento{" +
                "id=" + this.#id +
                ", nombre='" + this.#nombre + '\'' +
                ", ubicacion='" + this.#ubicacion + '\'' +
                ", empleados=";

        this.#empleados.forEach(element => {
            cadena += element.toString();
        });

        cadena += '}';

        return cadena;
    }
}