// 在创建服务时都使用
// 我们所说的服务是指那些能够被其它的组件或者指令调用的单一的,可共享的代码块.
// 服务能够使我们提高代码的利用率,方便组件之间共享数据和方法,方便测试和维护.
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class MessageService {
  messages: string[] = [];

  add(message: string) {
    this.messages.push(message);
  }

  clear() {
    this.messages = [];
  }
}

