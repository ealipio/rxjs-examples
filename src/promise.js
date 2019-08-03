import { from } from 'rxjs';

const url = 'https://my-json-server.typicode.com/typicode/demo/comments';

const myPromise = fetch(url).then(function(response) {
  return response.json();
});

const promiseSrc = from(myPromise).subscribe(console.log);
