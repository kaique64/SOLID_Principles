import { OrderStatus } from './interfaces/OrderStatus';
import { Messaging } from '../services/Messaging';
import { Persistency } from '../services/Persistency';
import { ShoppingCart } from './ShoppingCart';
import { CustomerOrder } from './interfaces/CustomerProtocol';

export class Order {
  private _orderStatus: OrderStatus = 'open';

  constructor(
    private readonly cart: ShoppingCart,
    private readonly messaging: Messaging,
    private readonly persistency: Persistency,
    private readonly customer: CustomerOrder,
  ) {}

  checkout(): void {
    if (this.cart.isEmpty()) {
      console.log('Seu carrinho está vazio');
      return;
    }

    this._orderStatus = 'closed';
    this.messaging.sendMessage(
      `Seu pedido com o total ${this.cart.totalWithDiscount()} está sendo processado!`,
    );
    this.persistency.saveOrder();
    this.cart.clear();
    console.log(
      'O cliente é: ',
      this.customer.getName(),
      ' ',
      this.customer.getIDN(),
    );
  }

  get orderStatus(): OrderStatus {
    return this._orderStatus;
  }
}
