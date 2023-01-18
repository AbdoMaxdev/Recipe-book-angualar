import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'reciprebook';
  navigatePage : string = '';

  navigateTO(page : string){
    this.navigatePage = page;
  }
}
