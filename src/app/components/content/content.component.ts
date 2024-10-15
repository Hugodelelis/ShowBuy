import { CUSTOM_ELEMENTS_SCHEMA ,Component } from '@angular/core';
import { register } from 'swiper/element/bundle';
register();

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [],
  templateUrl: './content.component.html',
  styleUrl: './content.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ContentComponent {

}
