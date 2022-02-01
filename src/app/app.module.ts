import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './====COMPONENTS/==========Home==========/home-page/home-page.component';
import { SwapHomeComponent } from './====COMPONENTS/==========SWAP==========/swap-home/swap-home.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    SwapHomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
