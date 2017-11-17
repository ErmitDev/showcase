import { Injectable, Output, EventEmitter } from '@angular/core';

@Injectable()
export class SharedService {
  @Output() fire: EventEmitter<any> = new EventEmitter();
  constructor() { }

  change(bool) {
     this.fire.emit(bool);
   }

   getEmittedValue() {
     return this.fire;
   }


}
