import {Component, OnInit} from '@angular/core';
import {IBasketItem} from '../../interfaces/IBasketItem';

@Component({
  selector: 'app-develop',
  templateUrl: './develop.component.html',
  styleUrls: ['./develop.component.scss']
})
export class DevelopComponent implements OnInit {

  q: IBasketItem = {price: 0, qty: 0, id: '1', name: '1111'};

  constructor() {
  }

  ngOnInit(): void {
  }

  test() {
    this.q = {price: 0, qty: 0, id: '7657', name: 'klkh'};
  }
}
