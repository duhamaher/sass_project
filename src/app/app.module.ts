import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { SecondPartComponent } from './components/second-part/second-part.component';
import { ThirdPartComponent } from './components/third-part/third-part.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SecondPartComponent,
    ThirdPartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
