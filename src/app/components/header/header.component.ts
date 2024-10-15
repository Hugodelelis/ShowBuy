import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import IOption from '../../interface/selectLeng.interface';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  // dropdown logic
  dropdownOpen: boolean = false;

  options = signal<IOption[]>([
      { value: 'pt-br', label: 'PT-BR', image: 'assets/icons/brazil.png' },
      { value: 'en', label: 'EN', image: 'assets/icons/spain.png' },
      { value: 'esp', label: 'ESP', image: 'assets/icons/USA.png' },
  ]);

  selectedOption: any = null;

  toggleDropdown() {
    this.dropdownOpen = !this.dropdownOpen;
  }

  selectOption(option: any) {
    this.selectedOption = option;
    this.dropdownOpen = false;
  }

  // modal logic
  modalOpen!: boolean

  showModal(): boolean {
      return this.modalOpen = true
  }

  closeModal():boolean {
    return this.modalOpen = false
  }
}
