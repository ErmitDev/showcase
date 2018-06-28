import { Component, OnInit } from '@angular/core';
import { trigger,style,transition,animate,keyframes,query,stagger,group, state, animateChild } from '@angular/animations';
import { SharedService } from '../shared.service';
import { WindowScrolling } from "../window-scrolling";

@Component({
  selector: 'app-right-menu',
  templateUrl: './right-menu.component.html',
  styleUrls: ['./right-menu.component.css'],
  animations: [
    trigger('menuTranslation', [
      state('in', style({
      	transform: 'translate3d(0, 0, 0)'
      })),
      state('out', style({        
        transform: 'translate3d(300px, 0, 0)'
      })),
      transition('in => out', animate('0.5s cubic-bezier(0.685, 0.0473, 0.346, 1)')),
      transition('out => in', animate('0.5s cubic-bezier(0.685, 0.0473, 0.346, 1)'))
    ]),
  ]
})
export class RightMenuComponent implements OnInit {
  ss : SharedService;
  rightMenuDisplayed : Boolean;  
  subscription : null;
  private windowScrolling: WindowScrolling;

  constructor(ss : SharedService, windowScrolling: WindowScrolling) { 
  	this.ss = ss;
  	this.rightMenuDisplayed = this.ss.isRightMenuDisplayed();
    this.windowScrolling = windowScrolling;
  }

  ngOnInit() {
  	this.subscription = this.ss.getIfMenuDisplayed()
      .subscribe(item => this.rightMenuDisplayed=item);
  }

  menuTranslate = function(){
    if(this.rightMenuDisplayed)
      return 'in';
    else
      return 'out';
  }

  closeMenu = function(){    
    this.ss.toggleMenuDisplayed(false);    
    this.windowScrolling.enable();
  }

}
