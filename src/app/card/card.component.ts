import {Component, OnInit} from '@angular/core';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})

export class CardComponent implements OnInit {
  /**
   * 声明属性的三种方式
   * 1.public 代表共有默认 可以在这个类使用，也可以在类外面使用
   * 2.protected  保护声明 他只有在当前类和它的子类里面可以访问
   * 3.private  私有   只有在当前类才可以访问的属性声明
   */
  public msg: string [] = ['angular1', 'angular2', 'angular3'];
  public firstname: string = 'Jimmy';
  public my: boolean = false;

  /**
   *  点击事件
   */
  changeName() {
    this.firstname = 'Houssein';
    this.my = !this.my;
  }
  constructor() {
  }

  ngOnInit() {
  }

}
