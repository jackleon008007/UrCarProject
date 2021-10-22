import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ArrendatariosComponent} from "./users/arrendatarios/pages/arrendatarios/arrendatarios.component";
import {ArrendadoresComponent} from "./users/arrendadores/pages/arrendadores/arrendadores.component";
import {LoginComponent} from "./public/login/login.component";
import {RegisterComponent} from "./public/register/register.component";
import {ProfileComponent } from "./users/arrendatarios/pages/profile/profile.component";
import { ReservasComponent } from "./users/arrendatarios/pages/reservas/reservas.component";
import {ConfigurationComponent} from "./users/arrendatarios/pages/configuration/configuration.component";
import {PoliticAndPrivacyComponent} from "./users/arrendatarios/pages/politic-and-privacy/politic-and-privacy.component";
import {MessageComponent} from "./users/arrendatarios/pages/message/message.component";
import {AccountComponent} from "./users/arrendatarios/pages/account/account.component";
import {HomeComponent } from "./users/arrendatarios/pages/home/home.component";
import {HomeAComponent} from "./users/arrendadores/pages/home-a/home-a.component";
import {ProfileAComponent} from "./users/arrendadores/pages/profile-a/profile-a.component";
import {CarsComponent} from "./users/arrendadores/pages/cars/cars.component";
import {MessageAComponent} from "./users/arrendadores/pages/message-a/message-a.component";
import {ReservationsAComponent} from "./users/arrendadores/pages/reservations-a/reservations-a.component";
import {PoliticAndPrivacyAComponent} from "./users/arrendadores/pages/politic-and-privacy-a/politic-and-privacy-a.component";
import {ConfigurationAComponent} from "./users/arrendadores/pages/configuration-a/configuration-a.component";
import { CarFormComponent}   from './users/arrendadores/pages/car-form/car-form.component';
import { ChatComponent } from './component/chat/chat.component'

const routes: Routes = [


  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: '',redirectTo: 'login',pathMatch:'full'},

  {path: 'arrendadores',redirectTo: 'arrendadores/cars',pathMatch:'full'},
  {path: 'arrendadores', component: ArrendadoresComponent,
    children:[
      {path: 'home-a', component: HomeAComponent},
      {path: 'profile-a', component: ProfileAComponent},
      {path: 'cars', component: CarsComponent},
      {path: 'configuration-a', component: ConfigurationAComponent},
      {path: 'message-a', component: MessageAComponent},
      {path: 'reservations-a', component: ReservationsAComponent},
      {path: 'politic-and-privacy-a', component: PoliticAndPrivacyAComponent},
      {path: 'create', component:CarFormComponent},
      {path: 'chat', component:ChatComponent}


    ]
  },

  {path: 'arrendatarios',redirectTo: 'arrendatarios/home',pathMatch:'full'},
  {path: 'arrendatarios', component: ArrendatariosComponent,
    children:[
      {path: 'home', component: HomeComponent},
      {path: 'profile', component: ProfileComponent},
      {path: 'reservas', component: ReservasComponent},
      {path: 'message', component: MessageComponent},
      {path: 'configuration', component: ConfigurationComponent},
      {path: 'account', component: AccountComponent},
      {path: 'politic-and-privacy', component: PoliticAndPrivacyComponent},
      {path: 'chat', component:ChatComponent}
    ]

  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
