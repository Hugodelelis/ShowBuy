import { CommonModule } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import IOption from '../../interface/selectLeng.interface';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import CartItem from '../../interface/carItem.interface';
import { ProductAddService } from '../../service/product-add.service';
import Swal from 'sweetalert2';
import ICartItem from '../../interface/carItem.interface';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  #translate = inject(TranslateService)
  #cartService = inject(ProductAddService)

  // dropdown logic
  dropdownOpen: boolean = false;

  options = signal<IOption[]>([
      { value: 'pt-br', label: 'pt-br', image: 'assets/icons/brazil.svg' },
      { value: 'en', label: 'en', image: 'assets/icons/usa.svg' },
      { value: 'esp', label: 'esp', image: 'assets/icons/spain.svg' },
  ]);

  toggleDropdown() {
    this.dropdownOpen = !this.dropdownOpen;
  }

  selectOption(option: any) {
    this.dropdownOpen = false;
    return this.#translate.setDefaultLang(option);
  }

  // modal logic
  modalOpen!: boolean

  showModal(): boolean {
      return this.modalOpen = true
  }

  closeModal():boolean {
    return this.modalOpen = false
  }

  getCountItems() {
    return this.#cartService.countItems()
  }

  getDeleteItem(id: number) {
    this.#cartService.deleteProduct(id)
  }

  getBD() {
    return this.#cartService.productsCart();
  }

  success() {
    this.#translate.get('pages.modal.sucess').subscribe((translatedText: string) => {
      Swal.fire({
        title: translatedText,
        icon: 'success',
      });
    });
  }
  
}
