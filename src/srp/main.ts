/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import { Messaging } from './services/Messaging';
import { Order } from './entities/Order';
import { Persistency } from './services/Persistency';
import { Product } from './entities/Product';
import { ShoppingCart } from './entities/ShoppingCart';

const shoppingCart = new ShoppingCart();
const messaging = new Messaging();
const persistency = new Persistency();
const order = new Order(shoppingCart, messaging, persistency);

shoppingCart.addItem(new Product('T-Shirt', 19.99));
shoppingCart.addItem(new Product('Jeans', 50.0));

console.log(order.orderStatus);
console.log(shoppingCart.item);
console.log(shoppingCart.total());
order.checkout();
console.log(order.orderStatus);
