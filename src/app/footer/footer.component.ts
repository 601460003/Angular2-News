import {Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  @Output() private outer = new EventEmitter;
  public msg: any = '我是子组件的数据';


  constructor() {
  }

  ngOnInit() {
  }

  run() {
    alert('我是子组件的方法');
  }

  sendParent() {
   this.outer.emit('我是子组件的数据');
  }
}
