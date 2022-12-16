// RxJS v6+
// import { ajax } from 'rxjs/ajax';
import { Observable } from 'rxjs';

const githubUsers = '/dummydata-reizen.json';

const users = ajax(githubUsers)

const subscribe = users.subscribe(
  res => console.log(res),
  err => console.error(err)
);




const observable = new Observable(function subscribe(subscriber) {
  const id = setInterval(() => {
    subscriber.next('hi');
  }, 1000);
});