import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-site-intro',
  templateUrl: './site-intro.component.html',
  styleUrls: ['./site-intro.component.css']
})
export class SiteIntroComponent implements OnInit {
  intro: any = [
    {img: './../../../../../assets/img/intro-2.png', content: 'التحليل الجيد للمشروع لدينا فريق لعمل تحليل كامل لكل النقاط الملوبة في المشروع و تحويلها لنقاط برمجة قابلة للتنفيذ'},
    {img: './../../../../../assets/img/intro-1.png', content: 'وضع خطة كاملة لتنفيذ المشروع وخطة زمنية اسبوعية و شهرية حسب مدة تنفيذ المشروع'},
    {img: './../../../../../assets/img/intro-4.png', content: 'الاهتمام بكفاءة العمل و ذلك باختيار افضل اللغات البرمجية و احدث التكنولوجيات للتنفيذ'},
    {img: './../../../../../assets/img/intro-3.png', content: 'اطلاع العميل على مراحل تنفيذ المشروع اول بأول وذلك لتلافي الاخطاء الخاصة بسوء الفهم بين المحللين و طلبات العميل'}
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
