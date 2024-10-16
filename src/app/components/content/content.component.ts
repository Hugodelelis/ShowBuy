import { CUSTOM_ELEMENTS_SCHEMA ,Component, signal } from '@angular/core';
import { register } from 'swiper/element/bundle';
import IImage from '../../interface/thumbImg.interface';
import { TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
register();

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './content.component.html',
  styleUrl: './content.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ContentComponent {

  // imgs
  mainImage: string = 'assets/imgs/image-product-1.jpg';

  images = signal<IImage[]>([
    { mainSrc: 'assets/imgs/image-product-1.jpg', thumbnailSrc: 'assets/imgs/image-product-1-thumbnail.jpg', altText: 'img product 1' },
    { mainSrc: 'assets/imgs/image-product-2.jpg', thumbnailSrc: 'assets/imgs/image-product-2-thumbnail.jpg', altText: 'img product 2' },
    { mainSrc: 'assets/imgs/image-product-3.jpg', thumbnailSrc: 'assets/imgs/image-product-3-thumbnail.jpg', altText: 'img product 3' },
    { mainSrc: 'assets/imgs/image-product-4.jpg', thumbnailSrc: 'assets/imgs/image-product-4-thumbnail.jpg', altText: 'img product 4' }
  ]);

  changeImage(newSrc: string) {
    this.mainImage = newSrc;
  }

  // counter
  count = signal<number>(1)

  increment() {
    this.count.update(value => value + 1);
  }

  decrement() {
    if(this.count() === 1) {
      return this.count
    }

    return this.count.update(value => value - 1);
  }
}
