const desktop = document.querySelector('.desktop');
const printOnDesktop = value => desktop.innerHTML += value + '<br>';



// creo el iterador cumpliendo el protocolo
let primerIterador = {
    currentValue: 1,
    next() {
        // Producimos valores del 1 al 5

        let result = { value: null, done: false };

        if (this.currentValue > 0 && this.currentValue <= 5) {
            // Create new state
            result = { value: this.currentValue, done: false };
            this.currentValue++;
        } else {
            // Create new state
            result = { value: this.currentValue, done: true }
        }
        return result;
    }
}

let item = primerIterador.next();
while (!item.done) {
    printOnDesktop(item.value);
    item = primerIterador.next();

}