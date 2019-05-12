import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-wei',
  templateUrl: './wei.component.html',
  styleUrls: ['./wei.component.css']
})
export class WeiComponent implements OnInit {
  public appTitle = 'Hello title';
  public values = '';
  public tableData: any[] = [{
    name: '水爷',
    date: '2017-08-19',
    address: '上海市普陀区金沙江路 1518 弄',
  }, {
    name: '火爷',
    date: '2017-08-20',
    address: '上海市普陀区金沙江路 1518 弄',
  }
  ]

  onClickMe() {
    this.appTitle = 'You are my hero!';
  }

  onKey(event: any) { // without type info
    // this.values += event.target.value + ' | ';
    console.log(event.target.value)
  }

  constructor() {
  }

  ngOnInit() {
  }

}
