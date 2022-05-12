import { Component, OnInit } from '@angular/core';
import ShopItemClass from 'src/app/models/shop_class';
import { ShoppingApiService } from 'src/app/services/shopping-api.service';

@Component({
  selector: 'app-shop-list',
  templateUrl: './shop-list.component.html',
  styleUrls: ['./shop-list.component.css'],
})
export class ShopListComponent implements OnInit {
  shops: ShopItemClass[] = [];

  // Dependency Injection to use Services in Components
  constructor(private shoppingApiService: ShoppingApiService) {}

  async ngOnInit() {
    this.shops = await this.shoppingApiService.getItem();
  }

  // async chooseItem(doned: string) {
  //   this.shops = await this.shoppingApiService.getselectedItem(doned);
  // }

  async addItem(newShop: ShopItemClass) {
    const shop = await this.shoppingApiService.createItem(newShop);
    this.shops.push(shop);
  }

  async updateItem(updateShop: ShopItemClass) {
    await this.shoppingApiService.updateItem(updateShop);
  }

  async removeItem(id: number) {
    await this.shoppingApiService.deleteItem(id);
    this.shops = this.shops.filter((t) => t.id !== id);
  }
}
