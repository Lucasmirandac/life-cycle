import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FatherComponent } from "./father/father.component";

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [RouterOutlet, FatherComponent],

})
export class AppComponent {
  title = 'life-cycle';
}
