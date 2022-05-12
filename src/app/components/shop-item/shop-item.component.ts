import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import ShopItemClass from 'src/app/models/shop_class';

@Component({
  selector: 'app-shop-item',
  templateUrl: './shop-item.component.html',
  styleUrls: ['./shop-item.component.css'],
})
export class ShopItemComponent implements OnInit {
  @Input() shopItem!: ShopItemClass;
  @Output() onItemDeleteEvent = new EventEmitter<number>();
  @Output() onItemUpdateEvent = new EventEmitter<ShopItemClass>();
  constructor() {}

  ngOnInit(): void {}
  btnDelete() {
    this.onItemDeleteEvent.emit(this.shopItem.id);
  }
  toggleCompleted() {
    this.shopItem.done = !this.shopItem.done;
    this.onItemUpdateEvent.emit(this.shopItem);
  }
}
