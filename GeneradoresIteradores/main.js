import printOnDesktop from '../util/print.js';
import { range } from './range.js';
import { range2 } from './range2.js';


range.min = 1;
range.max = 5;

range2.min = 1;
range2.max = 5;

for (let n of range)
    printOnDesktop(n);

printOnDesktop('<hr>');

for (let n of range2)
    printOnDesktop(n);