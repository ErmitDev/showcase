import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";


import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RightMenuComponent } from './right-menu/right-menu.component';
import { SharedService } from './shared.service';
import { NgInviewModule } from 'angular-inport'; 


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
    NgbModule.forRoot()
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
