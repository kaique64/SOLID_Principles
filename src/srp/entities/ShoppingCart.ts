import { IItem } from './interfaces/Item';

export class ShoppingCart {
  private readonly _items: IItem[] = [];

  addItem(item: IItem): void {
    this._items.push(item);
  }

  removeItem(index: number): void {
    this._items.splice(index, 1);
  }

  total(): number {
    return +this._items
      .reduce((total, next) => total + next.price, 0)
      .toFixed(2);
  }

  isEmpty(): boolean {
    return this._items.length === 0;
  }

  clear(): void {
    console.log('Carrinho de compras limpo com sucesso!');
    this._items.length = 0;
  }

  get item(): Readonly<IItem[]> {
    return this._items;
  }
}
