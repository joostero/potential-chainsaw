import { Component, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from "./common/header/header";
import { Navigation } from "./common/navigation/navigation";
import { Footer } from "./common/footer/footer";
import { JsonDataService } from './core/services/json-data/json-data-service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Navigation, Footer],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements OnInit {
  constructor(private jsonDataService: JsonDataService) {}
  protected readonly title = signal('Potential Chainsaw');
  protected readonly today = signal(new Date());

  ngOnInit(): void {
   this.jsonDataService.getJsonData('assets/my-app-data.json').subscribe(data => {
     console.log(data);
   });

  }
}
