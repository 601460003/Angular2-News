import {Component, OnInit, Input} from '@angular/core';

// 在需要的组件引入定义好的服务
import {StorageService} from '../services/storage.service';


@Component({
  selector: 'app-zhang',
  templateUrl: './zhang.component.html',
  styleUrls: ['./zhang.component.css']
})
export class  ZhangComponent implements OnInit {
  // @Input是用来定义模块的输入的，用来让父模块往子模块传递内容，相当于propos
  // 我是子组件
  @Input() appTitle = '';
  tableData: any[] = [{
    name: '水爷',
    date: '2017-08-19',
    address: '上海市普陀区金沙江路 1518 弄',
  }, {
    name: '火爷',
    date: '2017-08-20',
    address: '上海市普陀区金沙江路 1518 弄',
  }, {
    name: '土爷',
    date: '2017-08-21',
    address: '上海市普陀区金沙江路 1518 弄',
  }, {
    name: '金爷',
    date: '2017-08-22',
    address: '上海市普陀区金沙江路 1510 弄',
  }]

  constructor(public storage: StorageService) {
    // console.log(this.storage.get());
  }

  ngOnInit() {

  }


  handle(): void {
    alert('这是一条消息提示');
  }

}
