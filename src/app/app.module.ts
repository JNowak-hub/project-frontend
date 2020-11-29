import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {RouterModule, Routes} from '@angular/router';
import { LoggingComponent } from './component/logging/logging.component';

const routes: Routes = [{
  // path: '...',
  // component:
}, {
  // path: '...',
  // component:
}, {
  // path: '...',
  // component:
}];

@NgModule({
  declarations: [
    AppComponent,
    LoggingComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
