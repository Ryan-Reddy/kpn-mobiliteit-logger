// RxJS v6+
// import { ajax } from 'rxjs/ajax';
import dataGenerator from "/dummy-data-generator";

const dummydata = '/dummydata-reizen.json';

const users = ajax(githubUsers)

dataGenerator({
  count: 1,                         // Number of "words" or "paragraph"
  columnData: {
    "Project": {  // Required Column Name as string
      type: "word",              // Type of column => "word" || "paragraph"
      length: 10
    },
    "Type vervoer": {
      type: "word",
      length: 8
    },
    "Begin": {
      type: "date",
    },
    "Einde": {
      type: "date",
    },
    "Km": {
      type: "enum",
      values: [100, 0]
    },
    "C02": {
      type: "enum",
      values: [10, 0]
    },
    "Kosten": {
      type: "enum",
      values: [200, 0]
    },
    "Wijzig": {
      type: "word",
      length: 8
    }
  },
  isCSV: true,                      // if true will return output as CSV string
})

try {
  // throws an error if required parameters are not set
  console.log(
    dataGenerator({
      columnData,
      count: 2,
      isCSV: true,
    }),
  );
} catch (e) {
  console.log(e); // return the error
}

const subscribe = users.subscribe(
  res => console.log(res),
  err => console.error(err)
);


const observable = new Observable(function subscribe(subscriber) {
  const id = setInterval(() => {
    subscriber.next('hi');
  }, 1000);
});