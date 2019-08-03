import { Subject, of, from } from 'rxjs';
import { Observable } from 'rxjs/Rx';
import { map } from 'rxjs/operators';

let numbers = Observable.interval(1000).take(5).share();

numbers.subscribe(observer => console.log(`A ${observer}`));

setTimeout(
  () => numbers.subscribe(observer => console.log(`subscriber B ${observer}`)),
  2500
);
