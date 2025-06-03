import {Component, HostBinding, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {IGoodItem} from '../../../../interfaces/IGoodItem';

@Component({
  selector: 'app-good-item',
  templateUrl: './good-item.component.html',
  styleUrls: ['./good-item.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class GoodItemComponent implements OnInit {
  @HostBinding('class') hostClasses = 'GoodItem';

  @Input() good!: IGoodItem;

  constructor() {
  }

  ngOnInit(): void {
  }

}
