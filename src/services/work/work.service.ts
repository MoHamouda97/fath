import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WorkService {

  constructor(private http: HttpClient) { }

  getSlides () {
    return this.http.get(`${environment.URLSite}sliders.json`);
  }

  get () {
    return this.http.get(`${environment.URLSite}ourworks.json`);
  }
}
