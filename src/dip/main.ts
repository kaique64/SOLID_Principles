import { Messaging } from './services/Messaging';
import { Order } from './classes/Order';
import { Persistency } from './services/Persistency';
import { Product } from './classes/Product';
import { ShoppingCart } from './classes/ShoppingCart';
import { NoDiscount } from './classes/Discount';
import { EnterpriseCustomer } from './classes/Customer';

// const fiftyPercentDiscount = new FiftyPercentDiscount();
// const tenPercentDiscount = new TenPercentDiscount();
const noDiscount = new NoDiscount();
const shoppingCart = new ShoppingCart(noDiscount);
const messaging = new Messaging();
const persistency = new Persistency();
// const individualCustomer = new IndividualCustomer(
//   'Kaique',
//   'Henrique',
//   '22222222222',
// );
const enterpriseCustomer = new EnterpriseCustomer('Empresa', '22222222222');
const order = new Order(
  shoppingCart,
  messaging,
  persistency,
  enterpriseCustomer,
);

shoppingCart.addItem(new Product('T-Shirt', 19.99));
shoppingCart.addItem(new Product('Jeans', 50.0));

console.log(order.orderStatus);
console.log(shoppingCart.totalWithDiscount());
order.checkout();
console.log(order.orderStatus);
