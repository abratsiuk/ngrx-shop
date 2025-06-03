import {Component, HostBinding, Input, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-basket-add',
  templateUrl: './basket-add.component.html',
  styleUrls: ['./basket-add.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class BasketAddComponent implements OnInit {
  @HostBinding('class') hostClasses = 'BasketAdd';
  @Input() classes: string[] = [];
  @Input() goodId!: string;
  inBasket = false;

  constructor() {
  }

  ngOnInit(): void {
  }

}
