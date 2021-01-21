import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd';
import { ContactService } from 'src/services/contact/contact.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit, OnDestroy {
  contactForm: FormGroup;
  inputValue: string;
  options: string[] = []; 
  loader = false;

  constructor(private fb: FormBuilder, private message: NzMessageService, private service: ContactService, private router: Router) { }

  ngOnInit(): void {
    this.contactForm = this.fb.group({
      username: [null, [Validators.required]],
      email: [null, [Validators.required]],
      title: [null, [Validators.required]],
      message: [null, [Validators.required]],
    }); 
    
    if (this.router.url == '/contact') {
      document.getElementById('js_contact').classList.add('contact-margin')
    }
  }

  onInput(e: Event): void {
    const value = (e.target as HTMLInputElement).value;
    if (!value || value.indexOf('@') >= 0) {
      this.options = [];
    } else {
      this.options = ['gmail.com', 'yahoo.com', 'hotmail.com'].map(domain => `${value}@${domain}`);
    }
  }

  contact(){
    this.loader = true;

    let {...obj} = this.contactForm.value;
    
    this.service.contact(obj).subscribe(
      res => {
        this.message.success('شكرا لتواصلكم معنا');

        this.contactForm.reset();
        
        this.loader = false;
      },
      err => {
        this.message.error('حدث خطأ اثناء ارسال رسالتكم, بالرجاء المحاولة مرة اخرى');
        this.loader = false;
      }
    ) 
  }

  ngOnDestroy() {
    if (this.router.url == '/contact') {
      document.getElementById('js_contact').classList.remove('contact-margin')
    }
  }

}
