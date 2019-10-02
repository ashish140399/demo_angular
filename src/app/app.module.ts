import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { RedirectfbComponent } from './redirectfb/redirectfb.component';
import { RedirectgmailComponent } from './redirectgmail/redirectgmail.component';
import { RedirectlinkedinComponent } from './redirectlinkedin/redirectlinkedin.component'
@NgModule({
  declarations: [
    AppComponent,
    RedirectfbComponent,
    RedirectgmailComponent,
    RedirectlinkedinComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }