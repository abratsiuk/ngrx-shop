import {Component, OnInit} from '@angular/core';
import {IGoodItem} from '../../../../interfaces/IGoodItem';
import {itemsListMock} from '../../../../mock/mock_items_list';

@Component({
  selector: 'app-goods-list',
  templateUrl: './goods-list.component.html',
  styleUrls: ['./goods-list.component.scss']
})
export class GoodsListComponent implements OnInit {
  goods: IGoodItem[] = [];

  constructor() {
  }

  ngOnInit(): void {
    this.goods = itemsListMock.slice(0, 15);
  }

}
