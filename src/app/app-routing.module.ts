import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LeaseholderComponent} from "./users/leaseholder/pages/leaseholder/leaseholder.component";
import {LessorsComponent} from "./users/lessors/pages/lessors/lessors.component";
import {LoginComponent} from "./public/login/login.component";
import {RegisterComponent} from "./public/register/register.component";
import {ProfileComponent } from "./users/leaseholder/pages/profile/profile.component";
import { BookingComponent } from "./users/leaseholder/pages/booking/booking.component";
import {ConfigurationComponent} from "./users/leaseholder/pages/configuration/configuration.component";
import {PoliticAndPrivacyComponent} from "./users/leaseholder/pages/politic-and-privacy/politic-and-privacy.component";
import {MessageComponent} from "./users/leaseholder/pages/message/message.component";
import {AccountComponent} from "./users/leaseholder/pages/account/account.component";
import {HomeComponent } from "./users/leaseholder/pages/home/home.component";
import {HomeAComponent} from "./users/lessors/pages/home-a/home-a.component";
import {ProfileAComponent} from "./users/lessors/pages/profile-a/profile-a.component";
import {CarsComponent} from "./users/lessors/pages/cars/cars.component";
import {MessageAComponent} from "./users/lessors/pages/message-a/message-a.component";
import {ReservationsAComponent} from "./users/lessors/pages/reservations-a/reservations-a.component";
import {PoliticAndPrivacyAComponent} from "./users/lessors/pages/politic-and-privacy-a/politic-and-privacy-a.component";
import {ConfigurationAComponent} from "./users/lessors/pages/configuration-a/configuration-a.component";
import { CarFormComponent}   from './users/lessors/pages/car-form/car-form.component';
import { ChatComponent } from './component/chat/chat.component'
import {PostDetailsComponent} from "./component/post-details/post-details.component";

const routes: Routes = [


  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: '',redirectTo: 'login',pathMatch:'full'},

  {path: 'lessors',redirectTo: 'lessors/home-a',pathMatch:'full'},
  {path: 'lessors', component: LessorsComponent,
    children:[
      {path: 'home-a', component: HomeAComponent},
      {path: 'profile-a', component: ProfileAComponent},
      {path: 'cars', component: CarsComponent},
      {path: 'configuration-a', component: ConfigurationAComponent},
      {path: 'message-a', component: MessageAComponent,
        children:[
          {path: 'chat', component:ChatComponent}
        ]},
      {path: 'reservations-a', component: ReservationsAComponent},
      {path: 'politic-and-privacy-a', component: PoliticAndPrivacyAComponent},
      {path: 'create', component:CarFormComponent},
      {path: 'chat', component:ChatComponent}
    ]
  },

  {path: 'leaseholder',redirectTo: 'leaseholder/home',pathMatch:'full'},
  {path: 'leaseholder', component: LeaseholderComponent,
    children:[
      {path: 'home', component: HomeComponent},
      {path: 'profile', component: ProfileComponent},
      {path: 'booking', component: BookingComponent},
      {path: 'message', component: MessageComponent,
        children:[
          {path: 'chat', component:ChatComponent}
        ]
      },
      {path: 'configuration', component: ConfigurationComponent},
      {path: 'account', component: AccountComponent},
      {path: 'politic-and-privacy', component: PoliticAndPrivacyComponent},
      {path:'PostDetails', component:PostDetailsComponent}
    ]

  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
