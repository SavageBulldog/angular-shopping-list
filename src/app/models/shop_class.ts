// class for items (properties) used by list
class ShopItemClass {
  id?: number;
  title: string;
  description?: string;
  amount?: number;
  unit?: string;
  done: boolean;
  constructor(title: string, description?: string) {
    this.title = title;
    this.description = description;
    this.done = false;
  }
}
export default ShopItemClass;
