class Empleado {
    #id;
    #nombre;
    #puesto;
    #depno;

    constructor(nombre, puesto, depno) {
        this.#id++;
        this.#nombre = nombre;
        this.#puesto = puesto;
        this.#depno = depno;
    }

    toString() {
        return "Empleado{" +
        "id=" + this.#id +
        ", nombre='" + this.#nombre + '\'' +
        ", puesto='" + this.#puesto + '\'' +
        ", depno=" + this.#depno.toString() +
        '}';
    }
}