'use strict'

/*
https://github.com/Reactive-Extensions/RxJS/blob/master/doc/gettingstarted/creating.md
*/

const Rx = require('rx');

const stream = Rx.Observable.range(1, 10);

const ok = (obsName, x) => { console.log(`${obsName} : ${x}`); };
const error = (e) => { console.log('oups!'); };
const done = () => { console.log('Done =)'); }

// Subscribe directly
stream.subscribe(
  x => ok('Observer 1', x),
  e => error(e),
  done
);

// Or create an observer explicitly
const observer = Rx.Observer.create(
  x => ok('Observer 2', x),
  e => error(e),
  done
);

stream.subscribe(observer);