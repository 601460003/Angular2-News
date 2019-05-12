import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  public title: string = '我是一个头部组件';
  public message: any = 'wo';

  constructor() {
  }

  ngOnInit() {
  }

  run() {
    alert('我是父组件的方法');
  }
}
