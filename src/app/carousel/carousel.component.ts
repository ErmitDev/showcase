import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {  
  rowInView : Array<Boolean>;

  constructor(private modalService : NgbModal) {    
    this.rowInView = [false, false, false, false];
   }

  ngOnInit() {
  }

  animateRow = function(event, number){
    if(this.rowInView[number] != event.status){
      this.rowInView[number] = event.status;
    }
  }

  openModal(content){
    this.modalService.open(content, {size:"lg", windowClass: 'dark-modal', centered: true });
  }

}
