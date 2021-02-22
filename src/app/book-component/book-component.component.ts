import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-book-component',
  templateUrl: './book-component.component.html',
  styleUrls: ['./book-component.component.scss'],
})
export class BookComponentComponent implements OnInit {
  @Output() onBuy = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  handelClick(): void {
    this.onBuy;
    console.log('click');
  }
}
