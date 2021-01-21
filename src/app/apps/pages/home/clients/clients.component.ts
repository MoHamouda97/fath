import { Component, Input, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {
  @Input('slides') slides = [];
  
  customOptions: OwlOptions = {
    rtl:false,
    center: true,
    margin:10,
    autoplay:true,
    autoplayHoverPause:true,
    dots:false,
    loop: true,
    nav: true,
    navText: ['<img src="../../../../../../assets/img/right.png" alt="arrow" />', '<img src="./../../../../../assets/img/left.png" alt="arrow" />'],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:3
        }
    }
  };

  constructor() { }

  ngOnInit(): void {
  }

}
