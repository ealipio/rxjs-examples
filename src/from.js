import { Observable, Subject, of, from } from 'rxjs';
import { map } from 'rxjs/operators';

// from
//Turn an array, promise, or iterable into an observable.

//emit array as a sequence of values
const arraySource = from([1, 2, 3, 4, 5]);
//output: 1,2,3,4,5
const subscribeArray = arraySource.subscribe(val => console.log(val));

//emit string as a sequence
const source = from('Hello World');
//output: 'H','e','l','l','o',' ','W','o','r','l','d'
const subscribeString = source.subscribe(val => console.log(val));

// promises
//emit result of promise
let myPromise = new Promise((resolve, reject) => {
  setTimeout(function() {
    resolve('Hello World from my promise!');
  }, 1000);
});

const promiseSrc = from(myPromise);
const subscribePromise = promiseSrc.subscribe(val => console.log(val));
