import { Component, OnInit } from '@angular/core';

 // 在需要的组件引入定义好的服务
import { StorageService } from '../services/storage.service';

@Component({
  selector: 'app-zhi',
  templateUrl: './zhi.component.html',
  styleUrls: ['./zhi.component.css']
})
export class ZhiComponent implements OnInit {
  public order: number = 1;

  public historyList: any[] = [];

public  cars: any [] = [
  {
    cate: '宝马',
    list: [
      {
        title: '宝马X1',
        price: 20000
      },
      {
        title: '宝马X2',
        price: 20000
      },
      {
        title: '宝马X3',
        price: 20000
      },
    ]
  },
  {
    cate: '奥迪',
    list: [
      {
        title: '奥迪Q1',
        price: 20000
      },
      {
        title: '奥迪Q2',
        price: 20000
      },
      {
        title: '奥迪Q3',
        price: 20000
      },
    ]
  },
]


  constructor(public storage: StorageService) {

    // console.log(this.storage.set());
  }

  ngOnInit() {
    console.log('页面刷新切换会触发这个生命周期函数');
    // 判断款存是否存在
    // let searchList: any = this.storage.get('searchList');
    // if (searchList) {
    //   this.historyList = searchList;
    // }

  }
  //
  // //搜索的方法
  // doSearch() {
  //   if (this.historyList.indexOf(this.keyword) == -1) {
  //     this.historyList.push(this.keyword);
  //
  //     this.storage.set('searchlist', this.historyList);
  //
  //   }
  //   this.keyword = '';
  // }

  // //删除的方法
  // delList(key:any){
  // this.historyList.splice(key,1)
  // }

}
