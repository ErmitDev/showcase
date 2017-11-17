import { Component } from '@angular/core';
import { MenuComponent } from './menu/menu.component'
import { SharedService } from './shared.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  company : String;
  rightMenuDisplayed : Boolean;  
  ss : SharedService;
  subscription : null;

  constructor(ss : SharedService){
	this.company = "FC Company";
  	this.rightMenuDisplayed = false;
  	this.ss = ss;
  }

  ngOnInit() {
  	this.subscription = this.ss.getEmittedValue()
      .subscribe(item => this.rightMenuDisplayed=item);
  }
}
