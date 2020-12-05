import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {RouterModule, Routes} from '@angular/router';
import { LoggingComponent } from './component/logging/logging.component';
import { RegisterComponent } from './component/register/register.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { MainpageComponent } from './component/mainpage/mainpage.component';
import { CarouselComponent } from './component/carousel/carousel.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { UserProfileComponent } from './component/user-profile/user-profile.component';
import {AuthGuardGuard} from './guard/auth-guard.guard';
import {AuthorizationInterceptorInterceptor} from './interceptor/authorization-interceptor.interceptor';

const routes: Routes = [
  {path: 'login', component: LoggingComponent},
  {path: '', component: MainpageComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'myProfile', component: UserProfileComponent, canActivate: [AuthGuardGuard]}
  ];

@NgModule({
  declarations: [
    AppComponent,
    LoggingComponent,
    RegisterComponent,
    MainpageComponent,
    CarouselComponent,
    NavbarComponent,
    UserProfileComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    FormsModule
  ],
  providers: [{
    useClass: AuthorizationInterceptorInterceptor,
    multi: true,
    provide: HTTP_INTERCEPTORS
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
