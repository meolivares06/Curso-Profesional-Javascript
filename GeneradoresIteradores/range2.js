// Implementacion de estructura rango usando iterables y generadores y for of

export const range2 = {
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