import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from "./common/header/header";
import { Navigation } from "./common/navigation/navigation";
import { Footer } from "./common/footer/footer";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Navigation, Footer],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('Potential Chainsaw');
  protected readonly today = signal(new Date());
}
