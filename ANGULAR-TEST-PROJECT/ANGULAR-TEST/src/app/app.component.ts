import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  users = [
    {name: 'Ivan'},
    {name: 'Piotr'},
    {name: 'John'},
    {name: 'Jack'},
    {name: 'Jane'},
    {name: 'Judy'},
  ]

}
