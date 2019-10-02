import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RedirectgmailComponent } from './redirectgmail/redirectgmail.component';
import { RedirectlinkedinComponent } from './redirectlinkedin/redirectlinkedin.component';
import { RedirectfbComponent } from './redirectfb/redirectfb.component';
const routes: Routes = [

  {
    path:'Gmail',component:RedirectgmailComponent
  },
  {
    path:'Facebook',component:RedirectfbComponent
  },
  {
    path:'Linkedin',component:RedirectlinkedinComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

