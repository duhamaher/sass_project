import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { FirstPartComponent } from './first-part/first-part.component';
import { SecondPartComponent } from './components/second-part/second-part.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FirstPartComponent,
    SecondPartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
