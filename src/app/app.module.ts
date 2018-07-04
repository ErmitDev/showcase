import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ScrollToModule } from 'ng2-scroll-to-el';
import { NgInviewModule } from 'angular-inport'; 
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AgmCoreModule } from '@agm/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { FormsModule } from '@angular/forms';
import { WindowScrolling } from "./window-scrolling";

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { RightMenuComponent } from './right-menu/right-menu.component';
import { SharedService } from './shared.service';
import { ContactMapComponent } from './contact-map/contact-map.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ModalComponent } from './gallery/modal/modal.component';

export function createTranslateLoader(http: HttpClient) {
    return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    RightMenuComponent,
    ContactMapComponent,
    GalleryComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NgInviewModule,
    NgbModule.forRoot(),
    ScrollToModule.forRoot(),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDExQqWKJ4ujRUOsUnfdTV1k79iUE9fnOo'
    }),
    FormsModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      }
    }),
    WindowScrolling
  ],
  providers: [SharedService, WindowScrolling],
  entryComponents: [ModalComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
