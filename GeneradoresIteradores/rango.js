const printOnDesktop = value => {
    const desktop = document.querySelector('.desktop');
    desktop.innerHTML += value + '<br>';
}

// Implementacion de estructura rango usando iterables, generadores y for of

let range = {
    min: null,
    max: null,
    currentValue: null,
    [Symbol.iterator]() {
        return this;
    },
    next() {
        if (this.currentValue == null) this.currentValue = this.min;

        let result = { value: null, done: false };
        if (this.currentValue >= this.min && this.currentValue <= this.max) {
            result = { value: this.currentValue, done: false };
            this.currentValue++;
        } else {
            result = { value: this.currentValue, done: true }
        }
        return result;
    }
}

range.min = 1;
range.max = 5;

for (n of range) printOnDesktop(n);