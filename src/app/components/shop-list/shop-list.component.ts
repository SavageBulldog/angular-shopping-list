import { Component, EventEmitter, OnInit } from '@angular/core';
import ShopItemClass from 'src/app/models/shop_class';
import { ShoppingApiService } from 'src/app/services/shopping-api.service';

@Component({
  selector: 'app-shop-list',
  templateUrl: './shop-list.component.html',
  styleUrls: ['./shop-list.component.css'],
})
export class ShopListComponent implements OnInit {
  shopItems: ShopItemClass[] = [];

  // ☕☕☕ dependency injection
  constructor(private shoppingApiService: ShoppingApiService) {}

  async ngOnInit() {
    this.shopItems = await this.shoppingApiService.getItems();
  }

  async addItem(newShop: ShopItemClass) {
    const shop = await this.shoppingApiService.createItem(newShop);
    this.shopItems.push(shop);
  }

  async updateItem(updateShop: ShopItemClass) {
    await this.shoppingApiService.updateItem(updateShop);
  }

  async removeItem(id: number) {
    await this.shoppingApiService.deleteItem(id);
    this.shopItems = await this.shoppingApiService.getItems();
  }

  // filter item list finished/unfinished
  async onFilterDone(state: string) {
    switch (state) {
      case 'all': {
        this.shopItems = await this.shoppingApiService.getItems();
        break;
      }
      case 'finished': {
        // => list doesnt become empty after filtering, not the best solution 🤷🏽‍♂️
        this.shopItems = await this.shoppingApiService.getItems();
        this.shopItems = this.shopItems.filter((t) => t.done);
        break;
      }
      case 'unfinished': {
        this.shopItems = await this.shoppingApiService.getItems();
        this.shopItems = this.shopItems.filter((t) => !t.done);
        break;
      }
      default:
        break;
    }
  }

  async sortItemList(state: string) {
    switch (state) {
      case 'id': {
        //sort function check if id = null if it is set 0
        this.shopItems = this.shopItems.sort(
          (t, b) => (t.id ?? 0) - (b.id ?? 0)
        );
        break;
      }
      case 'title': {
        this.shopItems = this.shopItems.sort((t, b) =>
          t.title.localeCompare(b.title)
        );
        break;
      }
      case 'unit': {
        this.shopItems = this.shopItems.sort((t, b) =>
          t.unit.localeCompare(b.unit)
        );
        break;
      }
      default:
        break;
    }
  }
}
