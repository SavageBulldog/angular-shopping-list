import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import ShopItemClass from 'src/app/models/shop_class';

@Component({
  selector: 'app-shop-form',
  templateUrl: './shop-form.component.html',
  styleUrls: ['./shop-form.component.css'],
})
export class ShopFormComponent implements OnInit {
  @Output() onItemAddEvent = new EventEmitter<ShopItemClass>();
  model = new ShopItemClass('', 'pcs');

  constructor() {}

  ngOnInit(): void {}
  onSave() {
    // assert if title has been set
    if (this.model.title === '') {
      alert('👆 please enter a title for your item !!!');
      return;
    }
    this.onItemAddEvent.emit(this.model);
    // unset input field values
    this.model = new ShopItemClass('', 'pcs');
  }
}
