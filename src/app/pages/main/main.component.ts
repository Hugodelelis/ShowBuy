import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { ContentComponent } from '../../components/content/content.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [HeaderComponent, ContentComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {

}
