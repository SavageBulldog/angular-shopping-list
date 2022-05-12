import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import ShopItemClass from 'src/app/models/shop_class';

@Component({
  selector: 'app-shop-form',
  templateUrl: './shop-form.component.html',
  styleUrls: ['./shop-form.component.css'],
})
export class ShopFormComponent implements OnInit {
  @Output() onItemAddEvent = new EventEmitter<ShopItemClass>();
  model = new ShopItemClass('');

  constructor() {}

  ngOnInit(): void {}
  onSave() {
    if (this.model.title === '') {
      alert('Please provide a title for the item on your list');
      return;
    }
    this.onItemAddEvent.emit(this.model);
    this.model = new ShopItemClass('');
  }

  title = 'angular-key-press-example';
  // Only Numbers with Decimals are allowed
  keyPressNumbers(event: any) {
    let charCode = event.which ? event.which : event.keyCode;
    if (charCode != 46 && charCode > 31 && (charCode < 48 || charCode > 57)) {
      event.preventDefault();
      return false;
    }
    return true;
  }
}
