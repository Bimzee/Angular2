import { Component } from "@angular/core";

// import { Component } from '@angular/core';

// @Component({
//   selector: 'pm-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
// export class AppComponent {
//   title = 'Angular: Getting Started';
// }

@Component({
  selector: 'pm-root',
  template: `
  <div>
    <h1>{{pageTitle}}</h1>
    <div> {{pageText}} <div>
    <pm-products></pm-products>
  </div>
  `
})
export class AppComponent {
  pageTitle: string = 'Hello World Angular Application';
  pageText: string ="First Angular component";
}
