import { Injectable, Output, EventEmitter } from '@angular/core';

@Injectable()
export class SharedService {
	@Output() fire: EventEmitter<any> = new EventEmitter();
	@Output() fire2: EventEmitter<any> = new EventEmitter();
	rightMenuDisplayed : Boolean;
	slide: string;

	constructor() {
		this.rightMenuDisplayed = false;		
	}

	isRightMenuDisplayed(){
		return this.rightMenuDisplayed;
	}

	toggleMenuDisplayed() {
		this.rightMenuDisplayed = !this.rightMenuDisplayed;
		this.fire.emit(this.rightMenuDisplayed);
	}

	getIfMenuDisplayed() {
		return this.fire;
	}

	animateTopMenu(bool){
		this.fire2.emit(bool);
	}

	getIfIsOutsideView() {
		return this.fire2;
	}

	setSlide(slide){
		this.slide = slide;
	}

	getSlide(){
		return this.slide;
	}

}
