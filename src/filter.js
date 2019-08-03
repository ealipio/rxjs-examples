import { from } from 'rxjs';
import { map, filter } from 'rxjs/operators';

let beers = [
  { name: 'Stella', country: 'Belgium', price: 9.5 },
  { name: 'Sam Adams', country: 'USA', price: 8.5 },
  { name: 'Bud Light', country: 'USA', price: 6.5 },
  { name: 'Brooklyn Lager', country: 'USA', price: 8.0 },
  { name: 'Sapporo', country: 'Japan', price: 7.5 }
];

const arraySource = from(beers);

arraySource
  .pipe(
    filter(beer => beer.price < 8),
    map(beer => beer.name + ': $' + beer.price)
  )
  .subscribe(
    beer => console.log(beer),
    err => console.error(err),
    () => console.log('Streaming is over')
  );
