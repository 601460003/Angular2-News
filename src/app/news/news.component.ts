import {Component, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  @ViewChild('footer') footer: any;


  constructor() {
  }

  ngOnInit() {
  }

  getChildMsg() {
   alert(this.footer.msg);
  }

  getChildFn() {
    alert(this.footer.run());
  }

  /**
   *  //通过$event参数获取子组件的值
   */
  run(e) {
    alert(e);
    alert('我是父组件的run方法');
  }
}
