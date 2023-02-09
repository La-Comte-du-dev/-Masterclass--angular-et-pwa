import { Component } from '@angular/core';
import { PwaService } from './shared/pwa.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'pwa-omg';

  constructor(private pwaService: PwaService) {}
}
