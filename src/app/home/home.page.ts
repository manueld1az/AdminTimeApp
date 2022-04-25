import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { CountersManagerService } from '../counters-manager.service';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage implements OnInit{

  counter: any = 0;
  countersInfo = [];

  constructor(private countersManager: CountersManagerService,
              private router: Router) {}

  ngOnInit() {
    this.countersInfo = JSON.parse(localStorage.getItem("formCounter"));
    if (this.countersInfo != null) {
      this.router.navigate(['../tabs-counters']);
    }
    this.up();
  }

  up() {
    this.counter = document.getElementById("counter").getAttribute("value");
    if (this.counter === null) {
      this.counter = 1;
      document.getElementById("counter").setAttribute("value", this.counter)
    } else {
      this.counter++;
      document.getElementById("counter").setAttribute("value", this.counter)
    }
  }

  down() {
    this.counter = document.getElementById("counter").getAttribute("value");
    if (this.counter == null || this.counter == 1) {
      this.counter = 1;
      document.getElementById("counter").setAttribute("value", this.counter)
    } else {
      this.counter--;
      document.getElementById("counter").setAttribute("value", this.counter)
    }
  }

  redirectionToCounterSlides(numbersOfCounters) {
    this.countersManager.createSlides(parseInt(numbersOfCounters.value));
  }

}
