import { Component, OnInit, ViewChild, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { NgbCarouselConfig, NgbActiveModal, NgbCarousel } from '@ng-bootstrap/ng-bootstrap';
import { SharedService } from '../../shared.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
  providers: [NgbCarouselConfig],
})
export class ModalComponent implements OnInit, AfterViewInit {
  ss: SharedService;
  @ViewChild('carousel') carousel: NgbCarousel;

  constructor(public activeModal: NgbActiveModal, public config: NgbCarouselConfig, private cdRef : ChangeDetectorRef, ss: SharedService) {   
    config.interval = 0;
    this.ss = ss;
  }

  ngOnInit() {    
  }

  ngAfterViewInit() {
    this.carousel.select(this.ss.getSlide());
    //Prevent ExpressionChangedAfterItHasBeenCheckedError
    this.cdRef.detectChanges();
  }

  close(){
    this.activeModal.close();
  }

}
