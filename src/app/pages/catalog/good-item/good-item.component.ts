import {Component, Input, OnInit} from '@angular/core';
import {IGoodItem} from '../../../../interfaces/IGoodItem';

@Component({
  selector: 'app-good-item',
  templateUrl: './good-item.component.html',
  styleUrls: ['./good-item.component.scss']
})
export class GoodItemComponent implements OnInit {
  @Input() good!: IGoodItem;

  constructor() {
  }

  ngOnInit(): void {
  }

}
