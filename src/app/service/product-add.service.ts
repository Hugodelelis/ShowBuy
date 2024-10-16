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
      this.count
    }

    this.count.update(value => value - 1);
    this.updateProductPriceAndQuantity();
  }


  // add item logic
  products = signal<ICartItem[]>([
    {
      id: 1,
      name: 'shoes',
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


  addProductToCart(product: any) {
    let productsCart = JSON.parse(localStorage.getItem('ProductsCart') || '[]');
  
    const existingProductIndex = productsCart.findIndex((item: any) => item.id === product.id);

    if(existingProductIndex) {
      productsCart.push(product);
    }

    localStorage.setItem('ProductsCart', JSON.stringify(productsCart));
  }

  getCartValueAllItems() {
    let productsCart = JSON.parse(localStorage.getItem('ProductsCart') || '[]');
    return productsCart.length
  }

  getCarItems() {
    let productsCart = JSON.parse(localStorage.getItem('ProductsCart') || '[]');
  }
}
