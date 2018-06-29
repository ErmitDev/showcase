import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {NgbModal, NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  providers: [NgbCarouselConfig],
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {  
  rowInView : Array<Boolean>;

  constructor(private modalService : NgbModal, config: NgbCarouselConfig) {    
    this.rowInView = [false, false, false, false];
    config.interval = 0;
  }

  ngOnInit() {
  }

  animateRow = function(event, number){
    if(this.rowInView[number] != event.status){
      this.rowInView[number] = event.status;
    }
  }

  openModal(content){
    this.modalService.open(content, {size:"lg", windowClass: 'dark-modal' });
    console.log(content);
  }

}
