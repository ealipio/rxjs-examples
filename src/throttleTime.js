import { fromEvent } from 'rxjs';
import { throttleTime, scan } from 'rxjs/operators';

//throttleTime
//Emit latest value when specified duration has passed.

fromEvent(document, 'click')
  .pipe(
    throttleTime(1000),
    scan(count => count + 1, 0)
  )
  .subscribe(count => console.log(`Clicked ${count} times`));
