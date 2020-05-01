const printOnDesktop = value => {
    const desktop = document.querySelector('.desktop');
    desktop.innerHTML += value + '<br>';
}

// Producir valores en el rango min max

let rango = {
    min: null,
    max: null,
    [Symbol.iterator]() {
        return this.generator();
    },
    generator: function*() {
        for (let i = this.min; i <= this.max; i++)
            yield i
    }
}

rango.min = 1;
rango.max = 10;
for (n of rango) printOnDesktop(n);