import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from './modal/modal.component';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {
  ss : SharedService;  
  rowInView : Array<Boolean>;

  constructor(private modalService : NgbModal, ss : SharedService) { 
    this.ss = ss;   
    this.rowInView = [false, false, false, false];
  }

  ngOnInit() {
  }

  animateRow = function(event, number){
    if(this.rowInView[number] != event.status){
      this.rowInView[number] = event.status;
    }
  }

  openModal(selectedSlide){
    this.modalService.open(ModalComponent, {size:"lg", windowClass: 'dark-modal' });
    this.ss.setSlide(selectedSlide);
  }

}
