import { Injectable } from '@angular/core';
import ShopItemClass from '../models/shop_class';

@Injectable({
  providedIn: 'root',
})
export class ShoppingApiService {
  apiUrl = 'http://localhost:3999/shoppinglistitems/';

  constructor() {}

  async getItem(): Promise<ShopItemClass[]> {
    const response = await fetch(this.apiUrl);
    const data = await response.json();
    return data;
  }
  async getselectedItem(done: string): Promise<ShopItemClass[]> {
    const response = await fetch(`${this.apiUrl}/?${done}`);
    const data = await response.json();
    return data;
  }

  async createItem(shopitem: ShopItemClass): Promise<ShopItemClass> {
    const response = await fetch(`${this.apiUrl}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(shopitem),
    });
    const data = await response.json();
    return data;
  }

  async updateItem(shopitem: ShopItemClass): Promise<ShopItemClass | void> {
    if (!shopitem.id) {
      throw 'No id specified for Shopping Item';
    }

    const response = await fetch(`${this.apiUrl}/${shopitem.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(shopitem),
    });
    const data = await response.json();
    return data;
  }

  async deleteItem(id: number): Promise<void> {
    if (!id) {
      throw 'No id specified for shopping item';
    }
    const response = await fetch(`${this.apiUrl}/${id}`, {
      method: 'DELETE',
    });
  }
}
