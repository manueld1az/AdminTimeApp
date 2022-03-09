import { Component } from '@angular/core';
import { SwiperComponent } from "swiper/angular";

// import Swiper core and required modules
import SwiperCore, { Navigation } from "swiper";

// install Swiper modules
SwiperCore.use([Navigation]);

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {

  counter: any = 0;
  constructor() { }

  up() {
    this.counter = document.getElementById("counter").getAttribute("value");
    if (this.counter === null) {
      this.counter = 0;
      document.getElementById("counter").setAttribute("value", this.counter)
    } else {
      this.counter++;
      document.getElementById("counter").setAttribute("value", this.counter)
    }
  }

  down() {
    this.counter = document.getElementById("counter").getAttribute("value");
    if (this.counter == null || this.counter == 0) {
      this.counter = 0;
      document.getElementById("counter").setAttribute("value", this.counter)
    } else {
      this.counter--;
      document.getElementById("counter").setAttribute("value", this.counter)
    }
  }

}
