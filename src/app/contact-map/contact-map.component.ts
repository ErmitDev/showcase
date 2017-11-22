import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-map',
  templateUrl: './contact-map.component.html',
  styleUrls: ['./contact-map.component.css']
})
export class ContactMapComponent implements OnInit {
  lat: number = 43.6266905;
  lng: number = 7.0956869;

  constructor() { }

  ngOnInit() {
  }

}
