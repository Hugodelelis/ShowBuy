import { computed, Injectable, signal } from '@angular/core';
import ICartItem from '../interface/carItem.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductAddService {
  productsCart = signal<any>(this.loadCartFromLocalStorage());

  loadCartFromLocalStorage(): ICartItem[] {
    const storedCart = localStorage.getItem('productsCart');
    return storedCart ? JSON.parse(storedCart) : [];
  }

  addProduct(product: ICartItem) {
    this.productsCart.update(cart => {
      const existingProduct = cart.find((item: any) => item.id === product.id);
      if (existingProduct) {
        existingProduct.quantity = product.quantity;
      } else {
        cart.push(product);
      }
      return cart;
    });

    this.updateLocalStorage();
  }

  deleteProduct(id: number) {
    this.productsCart.update(cart => {
      const updatedCart = cart.filter((product: any) => product.id !== id);
      return updatedCart;
    });

    this.updateLocalStorage();
  }

  countItems() {
    return this.productsCart().length;
  }

  private updateLocalStorage() {
    localStorage.setItem('productsCart', JSON.stringify(this.productsCart()));
  }
}

