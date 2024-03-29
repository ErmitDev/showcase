import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

import { SharedService } from './shared.service';
import { WindowScrolling } from "./window-scrolling";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  company : String;
  rightMenuDisplayed : Boolean;
  isOutsideView : Boolean;
  isFrLangueSelected : Boolean = true;  
  ss : SharedService;
  subscription : any;
  rowInView : Array<Boolean>;
  translate : TranslateService;
  divisorWidth : Number = 50;
  private windowScrolling: WindowScrolling;

  constructor(ss : SharedService, translate: TranslateService, windowScrolling: WindowScrolling){
	  this.company = "Graphite Paysage";
  	this.rightMenuDisplayed = false;
  	this.ss = ss;
    this.rowInView = [false, false, false, false];
    this.isOutsideView = false;
    this.translate = translate;
    this.translate.setDefaultLang('fr');  
    this.windowScrolling = windowScrolling;  
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

  toggleMenu(){
    if(this.ss.isRightMenuDisplayed()){
      this.ss.toggleMenuDisplayed();
      this.windowScrolling.enable();
    }
  }

  selectLanguage = function(language){
    this.translate.use(language);
    if(language != 'fr'){
      this.isFrLangueSelected = false;
    }else{
      this.isFrLangueSelected = true;
    }
  }

}
