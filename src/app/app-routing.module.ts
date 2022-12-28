import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DescripcionComponent } from './descripcion/descripcion.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { MessageComponent } from './message/message.component';
import { SurpriseComponent } from './surprise/surprise.component';

const routes: Routes = [
  { path: "description", component:DescripcionComponent},
  { path: "message" , component:MessageComponent},
  { path: "surprise" , component: SurpriseComponent},
  { path:"**" , component:AppComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
