import Rx, { filter, interval } from 'rxjs';

const myPromise = new Promise((resolve) => {
  setTimeout(() => {
    resolve('dog');
    resolve('cat');
    resolve('bird');
  }, 100);
});

myPromise.then((result) => {
  console.log('promise..', result);
});

const myObserver = new Rx.Observable((observer) => {
  setTimeout(() => {
    observer.next('dog');
    observer.next('cat');
    observer.next('bird');
  }, 100);
});

 myObserver.pipe(filter(result => result === 'bird')).subscribe((result) => {
  console.log('observable:..', result);
});


// subscription.unsubscribe();


// const broadCast = interval(1000);

// this.sub1 = broadCast.pipe(map(data => console.log('mapdata=>','video ' + data))).subscribe(res =>{
//     console.log(res);
// })
