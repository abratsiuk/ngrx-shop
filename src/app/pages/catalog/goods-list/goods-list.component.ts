import {Component, HostBinding, OnInit, ViewEncapsulation} from '@angular/core';
import {IGoodItem} from '../../../../interfaces/IGoodItem';
import {itemsListMock} from '../../../../mock/mock_items_list';

@Component({
  selector: 'app-goods-list',
  templateUrl: './goods-list.component.html',
  styleUrls: ['./goods-list.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class GoodsListComponent implements OnInit {
  @HostBinding('class') hostClasses = 'GoodsList';

  goods: IGoodItem[] = [];

  constructor() {
  }

  ngOnInit(): void {
    this.goods = itemsListMock.slice(0, 15);
  }

}
