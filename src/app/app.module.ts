import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ScrollToModule } from 'ng2-scroll-to-el';
import { NgInviewModule } from 'angular-inport'; 
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { RightMenuComponent } from './right-menu/right-menu.component';
import { SharedService } from './shared.service';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    RightMenuComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NgInviewModule,
    NgbModule.forRoot(),
    ScrollToModule.forRoot()
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
