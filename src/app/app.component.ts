import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

import { SharedService } from './shared.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  company : String;
  rightMenuDisplayed : Boolean;
  isOutsideView : Boolean;
  isFrLangueSelected : Boolean = true;  
  ss : SharedService;
  subscription : null;
  rowInView : Array<Boolean>;

  constructor(ss : SharedService, translate: TranslateService){
	  this.company = "FC Company";
  	this.rightMenuDisplayed = false;
  	this.ss = ss;
    this.rowInView = [false, false, false];
    this.isOutsideView = false;
    translate.setDefaultLang('fr');
    
  }

  ngOnInit() {
  	this.subscription = this.ss.getIfMenuDisplayed()
      .subscribe(item => this.rightMenuDisplayed=item);
  }

  animateRow = function(event, number){
    if(this.rowInView[number] != event.status){
      this.rowInView[number] = event.status;
    }
  }

  animateTopMenu = function(event){
    if(event.isOutsideView != this.isOutsideView){
      this.isOutsideView = event.isOutsideView;
      this.ss.animateTopMenu(event.isOutsideView);
    }
  }

  selectLanguage = function(language){
    translate.use(language);
    if(language != 'fr'){
      this.isFrLangueSelected = false;
    }else{
      this.isFrLangueSelected = true;
    }
  }


}
