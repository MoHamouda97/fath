import { Component, OnDestroy, OnInit } from '@angular/core';
import { WorkService } from 'src/services/work/work.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  slides:any = [];
  slider: any [];
  loader = true;
  constructor(private workService: WorkService) { }

  ngOnInit(): void {
    // add class to footer
    document.getElementById('js_check_home').classList.add('clear-margin')

    // get works
    this.get();
  }

  get() {
    this.getSliders();
  }

  getSliders() {
    this.workService.getSlides().subscribe(
      res => {
        let data: any = res;
        console.log(data);
        this.slider = data.data;

        this.getWork();
        //this.loader = false;
      }
    )
  }

  getWork() {
    this.workService.get().subscribe(
      res => {
        let data: any = res;
        this.slides = data.data;
        this.loader = false;
      }
    )
  }

  ngOnDestroy() {
    document.getElementById('js_check_home').classList.remove('clear-margin')
  }

}
