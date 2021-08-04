/* eslint-disable no-useless-constructor */
import { IItem } from './interfaces/Item';

export class Product implements IItem {
  constructor(public name: string, public price: number) {}
}
