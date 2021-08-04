import { IItem } from '../../classes/interfaces/Item';

export interface ShoppingCartProtocol {
  item: Readonly<IItem[]>;
  addItem(item: IItem): void;
  removeItem(index: number): void;
  total(): number;
  totalWithDiscount(): number;
  isEmpty(): boolean;
  clear(): void;
}
