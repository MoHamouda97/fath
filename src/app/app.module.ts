import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';

registerLocaleData(en);

// ant
import { NgZorroAntdModule, NZ_I18N, en_US } from 'ng-zorro-antd';

// mat design
import {MatRippleModule} from '@angular/material/core';
import {MatTabsModule} from '@angular/material/tabs';

// static
import { NavComponent } from './apps/static/nav/nav.component';
import { FooterComponent } from './apps/static/footer/footer.component';

// pages
import { HomeComponent } from './apps/pages/home/home.component';
import { SliderComponent } from './apps/pages/home/slider/slider.component';
import { SiteIntroComponent } from './apps/pages/home/site-intro/site-intro.component';
import { ClientsComponent } from './apps/pages/home/clients/clients.component';
import { AboutComponent } from './apps/pages/about/about.component';
import { FaqsComponent } from './apps/pages/faqs/faqs.component';
import { PricingComponent } from './apps/pages/pricing/pricing.component';
import { PolicyComponent } from './apps/pages/policy/policy.component';
import { ContactPageComponent } from './apps/pages/contact-page/contact-page.component';
import { PortfolioComponent } from './apps/pages/portfolio/portfolio.component';

// reusable
import { ContactComponent } from './apps/reusable/contact/contact.component';
import { LoaderComponent } from './apps/reusable/loader/loader.component';

// static

// reusable

// owl
import { CarouselModule } from 'ngx-owl-carousel-o';

// services
import { WorkService } from 'src/services/work/work.service';

@NgModule({
  declarations: [
    AppComponent,
    // static
    NavComponent,
    FooterComponent,
    // pages
    HomeComponent,
    SliderComponent,
    SiteIntroComponent,
    ClientsComponent,
    AboutComponent,
    FaqsComponent,
    PricingComponent,
    PolicyComponent,
    ContactPageComponent,
    PortfolioComponent,
    // reusable
    ContactComponent,
    LoaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    // ant
    NgZorroAntdModule,
    // mat
    MatRippleModule,
    MatTabsModule,
    // owl
    CarouselModule,
    // router
    RouterModule.forRoot([
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'about',
        component: AboutComponent
      },
      {
        path: 'pricing',
        component: PricingComponent
      },
      {
        path: 'faq',
        component: FaqsComponent
      },
      {
        path: 'policy',
        component: PolicyComponent
      },
      {
        path: 'contact',
        component: ContactComponent
      },
      {
        path: 'portfolio',
        component: PortfolioComponent
      }
    ])
  ],
  providers: [
    { provide: NZ_I18N, useValue: en_US },
    WorkService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
