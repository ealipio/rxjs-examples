import { Subject, of, zip, from } from 'rxjs';
import { Observable } from 'rxjs/Rx';
import { map, delay } from 'rxjs/operators';
// zip:
// After all observables emit, emit values as an array

const sourceOne = of('Hello');
const sourceTwo = of('World!');
const sourceThree = of('Goodbye');
const sourceFour = of('My Friend!');

//wait until all observables have emitted a value
// then emit all as an array
const example = zip(
  sourceFour,
  sourceOne.pipe(delay(5000)),
  sourceTwo.pipe(delay(1000)),
  sourceThree.pipe(delay(2000))
);
//output: ["Hello", "World!", "Goodbye", "World!"]
const subscribe = example.subscribe(val => console.log(val));
