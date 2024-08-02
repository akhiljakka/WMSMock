import { Component, Renderer2 } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { OrderFormComponent } from "./order-form/order-form.component";
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, OrderFormComponent, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  currentPageIndex = 0;
  pages: string[] = ['pagina1', 'pagina2']; // Add your page paths here

  constructor() { }

}







