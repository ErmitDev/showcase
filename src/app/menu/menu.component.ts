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

  constructor(ss: SharedService) { 
  	this.company = "FC Company";
  	this.rightMenuDisplayed = false;
    this.isOutsideView = false;
  	this.ss = ss;
  }

  ngOnInit() {
    this.subscription = this.ss.getIfIsOutsideView()
      .subscribe(item => this.isOutsideView=item);
  }

  toggleMenu(){
  	this.rightMenuDisplayed = !this.rightMenuDisplayed;
  	this.ss.toggleMenuDisplayed(this.rightMenuDisplayed);
  }

}
