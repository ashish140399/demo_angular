import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Demoangular';
  constructor(private router:Router){}

  onclkgmail(){
    this.router.navigate(['/Gmail']);
  }
  onclkfacebook(){
    this.router.navigate(['/Facebook']);
  }
  onclklinkedin(){
    this.router.navigate(['/Linkedin']);
  }

}
