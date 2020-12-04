import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {RouterModule, Routes} from '@angular/router';
import { LoggingComponent } from './component/logging/logging.component';
import { RegisterComponent } from './component/register/register.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { MainpageComponent } from './component/mainpage/mainpage.component';
import { CarouselComponent } from './component/carousel/carousel.component';
import { NavbarComponent } from './component/navbar/navbar.component';

const routes: Routes = [
  {path: 'login', component: LoggingComponent},
  {path: '', component: MainpageComponent},
  {path: 'register', component: RegisterComponent}
  ];

@NgModule({
  declarations: [
    AppComponent,
    LoggingComponent,
    RegisterComponent,
    MainpageComponent,
    CarouselComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
