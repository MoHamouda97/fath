import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { WorkService } from 'src/services/work/work.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
  works: any = [];
  loader = true;

  customOptions: OwlOptions = {
    rtl:false,
    center: true,
    margin:10,
    autoplay:true,
    autoplayHoverPause:true,
    dots:false,
    loop: true,
    nav: false,
    animateOut: 'fadeOut',
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
  };

  constructor(private workService: WorkService) { }

  ngOnInit(): void {
    this.getWork();
  }

  getWork() {
    this.workService.get().subscribe(
      res => {
        let data: any = res;
        this.works = data.data;
        this.loader = false;
      }
    )
  }

}
