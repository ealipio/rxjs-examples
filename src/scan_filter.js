import { fromEvent } from 'rxjs';
import { scan } from 'rxjs/operators';

/*** 
The scan operator works just like reduce for arrays. 
It takes a value which is exposed to a callback. 
The returned value of the callback will then become the next value
exposed the next time the callback runs.
*/

fromEvent(document, 'click')
  .pipe(scan(count => count + 1, 0))
  .subscribe(count => console.log(`Clicked ${count} times`));
