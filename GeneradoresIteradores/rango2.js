const printOnDesktop = value => {
    const desktop = document.querySelector('.desktop');
    desktop.innerHTML += value + '<br>';
}

// Implementacion de estructura rango usando iterables y generadores y for of

let range = {
    min: null,
    max: null,
    [Symbol.iterator]() {
        return this.generator();
    },
    generator: function*() {
        for (let i = this.min; i <= this.max; i++) {
            yield i;
        }
    }
}

range.min = 1;
range.max = 5;

for (n of range) printOnDesktop(n);