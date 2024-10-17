import { computed, Injectable, signal } from '@angular/core';
import CartItem from '../interface/carItem.interface';
import ICartItem from '../interface/carItem.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductAddService {
  // increment count item
  count = signal<number>(1)

  increment() {
    this.count.update(value => value + 1);
    this.updateProductPriceAndQuantity();
  }

  decrement() {
    if(this.count() === 1) {
      return this.count
    }

    this.updateProductPriceAndQuantity();
    return this.count.update(value => value - 1);
  }


  // add item logic
  products = signal<ICartItem[]>([
    {
      id: 1,
      name: 'limited shoes',
      img: 'assets/imgs/image-product-1-thumbnail.jpg',
      price: this.count() * 125,
      quantity: this.count() 
    }
  ]);

  private updateProductPriceAndQuantity() {
    const updatedProducts = this.products().map(product => ({
      ...product,
      price: this.count() * 125,
      quantity: this.count() 
    }));

    this.products.set(updatedProducts);
  }

  productsCart = JSON.parse(localStorage.getItem('ProductsCart') || '[]');

  addProductToCart(product: any) {
  
    const existingProductIndex = this.productsCart.findIndex((item: any) => item.id === product.id);

    if(existingProductIndex) {
      this.productsCart.push(product());
    }

    localStorage.setItem('ProductsCart', JSON.stringify(this.productsCart));
  }

  getCartValueAllItems() {
    return this.productsCart.length
  }

  deleteItem(index: any) {

    if (index > -1 && index < this.productsCart.length) {
      this.productsCart.splice(index, 1);
    } 

    localStorage.setItem('ProductsCart', JSON.stringify(this.productsCart));
  }
}
