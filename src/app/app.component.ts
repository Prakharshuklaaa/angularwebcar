  import { Component } from '@angular/core';
  import { Router } from '@angular/router';

  @Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrl: './app.component.css'
  })
  export class AppComponent {
    constructor(private router:Router){}
    navigateTo(route: string){
      this.router.navigate([`/${route}`]);
      console.log(route);
    }
  }
