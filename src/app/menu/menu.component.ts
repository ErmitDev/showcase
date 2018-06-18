import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {  
  company : String;
  rightMenuDisplayed : Boolean;
  isOutsideView : Boolean;    
  ss : SharedService;
  subscription : null;
  subscription2 : null;

  constructor(ss: SharedService) { 
  	this.ss = ss;
  	this.company = "Graphite Paysage";
  	this.rightMenuDisplayed = this.ss.isRightMenuDisplayed();
    this.isOutsideView = false;
  }

  ngOnInit() {
    this.subscription = this.ss.getIfIsOutsideView()
      .subscribe(item => this.isOutsideView=item);

    this.subscription2 = this.ss.getIfMenuDisplayed()
      .subscribe(item => this.rightMenuDisplayed=item);
  }

  toggleMenu(){
  	// this.rightMenuDisplayed = !this.rightMenuDisplayed;
    this.ss.toggleMenuDisplayed();
  }

}
