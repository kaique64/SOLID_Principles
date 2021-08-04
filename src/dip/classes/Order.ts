import { OrderStatus } from './interfaces/OrderStatus';
import { CustomerOrder } from './interfaces/CustomerProtocol';
import { MessagingProtocol } from './interfaces/MessagingProtocol';
import { ShoppingCartProtocol } from './interfaces/ShoppingCartProtocol';
import { PersistencyProtocol } from './interfaces/PersistencyProtocol';

export class Order {
  private _orderStatus: OrderStatus = 'open';

  constructor(
    private readonly cart: ShoppingCartProtocol,
    private readonly messaging: MessagingProtocol,
    private readonly persistency: PersistencyProtocol,
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
