import { BehaviorSubject } from 'rxjs';
import LocalstorageService from './localstorage-service';

const STORAGE_KEY = 'data';
const DATA_INIT = [];

export class DataService {
  static dataList = [];

  dataArray = new BehaviorSubject([...DataService.dataList]);

  constructor() {
    this.fetchData();

    // nasty way of active pulling
    // the setInterval solution allows to sync between multiple browser tabs on a single computer.
    this.intervalTimer = setInterval(this.fetchData.bind(this), 1000);
  }

  fetchData() {
    return LocalstorageService.getStorage(STORAGE_KEY)
      .then((data) => {
        // ?? = nullish coalescing operator (see: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing)
        const resultData = data ?? DATA_INIT;

        // check if data has changed:
        if (JSON.stringify([...resultData]) !== JSON.stringify([...DataService.dataList])) {
          // old_data !== new_data
          DataService.dataList = [...resultData];
          this.dataArray.next([...DataService.dataList]);
        }
      });
  }

  addData(data) {
    DataService.dataList = [...DataService.dataList, data];
    LocalstorageService.setStorage(STORAGE_KEY, DataService.dataList)
    .then(() => {
      this.dataArray.next(DataService.dataList);
    });
  }

  removeData(index) {
    DataService.dataList.splice(index, 1);
    LocalstorageService.setStorage(STORAGE_KEY, DataService.dataList)
    .then(() => {
      this.dataArray.next([...DataService.dataList]);
    });
  }
}
