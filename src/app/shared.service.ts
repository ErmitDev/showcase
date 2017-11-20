import { Injectable, Output, EventEmitter } from '@angular/core';

@Injectable()
export class SharedService {
  @Output() fire: EventEmitter<any> = new EventEmitter();
  @Output() fire2: EventEmitter<any> = new EventEmitter();
  constructor() { }

	toggleMenuDisplayed(bool) {
		this.fire.emit(bool);
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
	


}
