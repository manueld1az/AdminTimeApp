import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class CountersManagerService {

  slidesNumbers: number;

  constructor(private router: Router) { }

  createSlides(numbersOfSlides: number) {
    this.router.navigate(['counter-slides', numbersOfSlides]);
  }

}
