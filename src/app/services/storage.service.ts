// 用指令自动生成的服务
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() {
  }

  set(key: string, value: any) {
    // localStorage.setItem(key, JSON.stringify(value));
  }

  get(key: any) {
    // return JSON.parse(localStorage.getItem(key));
  }


}
