// RxJS v6+
import { of } from 'rxjs';
import { scan, filter } from 'rxjs/operators';


const source = of(1, 2, 3, 4, 5, 6, 7, 8, 9);
// basic scan example, sum over time starting with zero
const example = source.pipe(
  scan((acc, curr) => acc + curr, 0),
  filter(i => i % 2 === 0)
);
// log accumulated values
// output: 1,3,6
const subscribe = example.subscribe(val => console.log(val));
