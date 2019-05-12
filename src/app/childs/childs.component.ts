import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-childs',
  templateUrl: './childs.component.html',
  styleUrls: ['./childs.component.css']
})
export class ChildsComponent implements OnInit {
  @Input() title: any;
  @Input() message: any;
  @Input() run: any;
  @Input() parent: any;

  getMsg() {
    alert(this.message);
  }

  getRun() {
    this.run();
  }

  getAll() {
    this.parent.run();
  }

  constructor() {
  }

  ngOnInit() {
  }

}
