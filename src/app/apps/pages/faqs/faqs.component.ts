import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-faqs',
  templateUrl: './faqs.component.html',
  styleUrls: ['./faqs.component.css']
})
export class FaqsComponent implements OnInit {
  panels = [
    {
      active: true,
      name: 'كيف ابدا المتجر الالكتروني الخاص بي؟',
      disabled: false,
      content: 'يمكنك بدء متجرك الالكتروني بتحديد المنتجات الخاصة بك'
    },
    {
      active: false,
      disabled: false,
      name: 'كيف ابدا المتجر الالكتروني الخاص بي؟',
      content: 'يمكنك بدء متجرك الالكتروني بتحديد المنتجات الخاصة بك'
    },
    {
      active: false,
      disabled: false,
      name: 'كيف ابدا المتجر الالكتروني الخاص بي؟',
      content: 'يمكنك بدء متجرك الالكتروني بتحديد المنتجات الخاصة بك'
    },
    {
      active: false,
      disabled: false,
      name: 'كيف ابدا المتجر الالكتروني الخاص بي؟',
      content: 'يمكنك بدء متجرك الالكتروني بتحديد المنتجات الخاصة بك'
    },
    {
      active: false,
      disabled: false,
      name: 'كيف ابدا المتجر الالكتروني الخاص بي؟',
      content: 'يمكنك بدء متجرك الالكتروني بتحديد المنتجات الخاصة بك'
    },
    {
      active: false,
      disabled: false,
      name: 'كيف ابدا المتجر الالكتروني الخاص بي؟',
      content: 'يمكنك بدء متجرك الالكتروني بتحديد المنتجات الخاصة بك'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
