/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
type IItem = {
  name: string;
  price: number;
};

type IOrderStatus = 'open' | 'closed';

export class ShoppingCartLegacy {
  private readonly _items: IItem[] = [];

  private _orderStatus: IOrderStatus = 'open';

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

  sendMessage(message: string): void {
    console.log(`Mensagem enviada: ${message}`);
  }

  saveOrder(): void {
    console.log('Pedido salvo com sucesso!');
  }

  clear(): void {
    console.log('Carrinho de compras limpo com sucesso!');
    this._items.length = 0;
  }

  checkout(): void {
    if (this.isEmpty()) {
      console.log('Seu carrinho está vazio');
      return;
    }

    this._orderStatus = 'closed';
    this.sendMessage(
      `Seu pedido com o total ${this.total()} está sendo processado!`,
    );
    this.saveOrder();
    this.clear();
  }

  get item(): Readonly<IItem[]> {
    return this._items;
  }

  get orderStatus(): IOrderStatus {
    return this._orderStatus;
  }
}
