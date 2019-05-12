import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {
  // 在构造器中声明使用这个服务
  constructor(public messageService: MessageService) {}

  ngOnInit() {
  }

}
