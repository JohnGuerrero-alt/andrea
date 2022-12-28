import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { DescripcionComponent } from './descripcion/descripcion.component';
import { MessageComponent } from './message/message.component';
import { SurpriseComponent } from './surprise/surprise.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    DescripcionComponent,
    MessageComponent,
    SurpriseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
