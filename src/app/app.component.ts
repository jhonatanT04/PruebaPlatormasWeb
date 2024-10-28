import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { OperacionesComponentComponent } from './componets/operaciones-component/operaciones-component.component';
import { HomeComponentComponent } from './componets/home-component/home-component.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,OperacionesComponentComponent,HomeComponentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'caluladoraTacuri';
}
