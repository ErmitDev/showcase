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

  constructor(ss: SharedService) { 
  	this.company = "FC Company";
  	this.rightMenuDisplayed = false;
  	this.ss = ss;
  }

  ngOnInit() {
  }

  toggleMenu(){
  	this.rightMenuDisplayed = !this.rightMenuDisplayed;
  	this.ss.change(this.rightMenuDisplayed);
  }

}
