import { Component } from '@angular/core';
import { ConfigService } from './config/config.service'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Lambda calculus interpreter';
  results : Array<string> = [];
  query: string = "";
  constructor(private configService: ConfigService) {}

  run() {
    console.log(this.query)
    this.configService.getResults(this.query)
    .subscribe((data: Array<string>) => {
      this.results = data.length > 0 ? data : ["error"];
   });
    
  }

}
