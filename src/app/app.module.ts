import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { LeaseholderComponent } from './users/leaseholder/pages/leaseholder/leaseholder.component';
import { LessorsComponent } from './users/lessors/pages/lessors/lessors.component';
import { LoginComponent } from './public/login/login.component';
import { RegisterComponent } from './public/register/register.component';

import { HttpClientModule } from '@angular/common/http';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import { AccountComponent } from './users/leaseholder/pages/account/account.component';
import { ConfigurationComponent } from './users/leaseholder/pages/configuration/configuration.component';
import { MessageComponent } from './users/leaseholder/pages/message/message.component';
import { PoliticAndPrivacyComponent } from './users/leaseholder/pages/politic-and-privacy/politic-and-privacy.component';
import { ProfileComponent } from './users/leaseholder/pages/profile/profile.component';
import { BookingComponent } from './users/leaseholder/pages/booking/booking.component';
import { HomeComponent } from './users/leaseholder/pages/home/home.component';
import { CarsComponent } from './users/lessors/pages/cars/cars.component';

import { HomeAComponent } from './users/lessors/pages/home-a/home-a.component';
import { MessageAComponent } from './users/lessors/pages/message-a/message-a.component';
import { ConfigurationAComponent } from './users/lessors/pages/configuration-a/configuration-a.component';
import { ProfileAComponent } from './users/lessors/pages/profile-a/profile-a.component';
import { ReservationsAComponent } from './users/lessors/pages/reservations-a/reservations-a.component';
import { PoliticAndPrivacyAComponent } from './users/lessors/pages/politic-and-privacy-a/politic-and-privacy-a.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatListModule} from '@angular/material/list';
import { MatSliderModule } from '@angular/material/slider';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import{ MatRadioModule} from "@angular/material/radio";
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSortModule } from '@angular/material/sort';

import { CarFormComponent } from './users/lessors/pages/car-form/car-form.component';
import { MatSelectModule } from '@angular/material/select';

import { LayoutModule } from '@angular/cdk/layout';
import { NavComponent } from './users/lessors/pages/nav/nav.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { ChatComponent } from './component/chat/chat.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import { PostDetailsComponent } from './component/post-details/post-details.component';






@NgModule({
  declarations: [
    AppComponent,
    LeaseholderComponent,
    LessorsComponent,
    LoginComponent,
    RegisterComponent,
    AccountComponent,
    ConfigurationComponent,
    MessageComponent,
    PoliticAndPrivacyComponent,
    ProfileComponent,
    BookingComponent,
    HomeComponent,
    CarsComponent,

    HomeAComponent,
    MessageAComponent,
    ConfigurationAComponent,
    ProfileAComponent,
    ReservationsAComponent,
    PoliticAndPrivacyAComponent,
    CarFormComponent,
    NavComponent,
    ChatComponent,
    PostDetailsComponent,




  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatFormFieldModule,
    FormsModule, ReactiveFormsModule,
    MatTableModule,
    MatPaginatorModule,
    MatInputModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatDatepickerModule,
    MatListModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatRadioModule,
    MatCheckboxModule,
    MatSortModule,
    MatSelectModule,
    LayoutModule,
    MatSidenavModule,
    FlexLayoutModule


  ],
  exports:[
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatRadioModule,
    ReactiveFormsModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
