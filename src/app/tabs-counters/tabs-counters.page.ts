import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabs-counters',
  templateUrl: './tabs-counters.page.html',
  styleUrls: ['./tabs-counters.page.scss'],
})

export class TabsCountersPage implements OnInit {

  countersInfo = [];
  valueSelected = "0";
  title = "";
  description = "";
  countdown = "";
  currentCounters = [];
  triggerCounter: any;

  constructor() { }

  ngOnInit() {
    // Searchs number of counters for rendering
    this.countersInfo = JSON.parse(localStorage.getItem("formCounter"));

    this.currentCounters = JSON.parse(localStorage.getItem("currentCounters"));
    let currentHours: string = "00";
    let currentMinutes: string = "00";
    let currentSeconds: string = "00";
    if (this.currentCounters == null || this.currentCounters[parseInt(this.valueSelected)] == null) {
      // Changed to array again after be converted in null element
      this.currentCounters = [];
      currentHours = this.countersInfo[this.valueSelected].counter;

      this.insertValues(this.countersInfo[this.valueSelected].title, this.countersInfo[this.valueSelected].description, currentHours + ":00:00");
    } else {
      currentHours = this.currentCounters[parseInt(this.valueSelected)].hours;
      currentMinutes = this.currentCounters[parseInt(this.valueSelected)].minutes;
      currentSeconds = this.currentCounters[parseInt(this.valueSelected)].seconds;

      this.insertValues(this.countersInfo[this.valueSelected].title, this.countersInfo[this.valueSelected].description, currentHours + ":" + currentMinutes + ":" + currentSeconds);
    }

    this.currentCounters[this.valueSelected] = {
      "hours": currentHours,
      "minutes": currentMinutes,
      "seconds": currentSeconds
    };

    localStorage.setItem("currentCounters", JSON.stringify(this.currentCounters));
  }

  // INSERTS VALUES TO EACH INPUT IN HTML INTERFACE
  insertValues(title: string, description: string, counter: string) {
    this.title = title;
    this.description = description;
    this.countdown = counter;
  }

  // Detects the change of each segment and change the value of the segment selected
  segmentChanged(event: CustomEvent) {
    this.valueSelected = event.detail.value;

    this.currentCounters = JSON.parse(localStorage.getItem("currentCounters"));
    let currentHours = "00";
    let currentMinutes = "00";
    let currentSeconds = "00";
    if (this.currentCounters == null || this.currentCounters[parseInt(this.valueSelected)] == null) {
      currentHours = this.countersInfo[this.valueSelected].counter;
    } else {
      currentHours = this.currentCounters[parseInt(this.valueSelected)].hours;
      currentMinutes = this.currentCounters[parseInt(this.valueSelected)].minutes;
      currentSeconds = this.currentCounters[parseInt(this.valueSelected)].seconds;
    }

    this.insertValues(this.countersInfo[this.valueSelected].title, this.countersInfo[this.valueSelected].description, currentHours + ":" + currentMinutes + ":" + currentSeconds);
  }

  coutdown(hours: number, minutes: number, seconds: number) {
    const countdown = () => {
      if (seconds > 0 && minutes >= 0) {
        this.countdown = hours + ":" + minutes + ":" + seconds--;
      } else if (seconds == 0 && minutes > 0) {
        this.countdown = hours + ":" + minutes-- + ":" + seconds;
        seconds = 59;
      } else if (minutes == 0 && seconds == 0 && hours > 0) {
        this.countdown = hours-- + ":" + minutes + ":" + seconds;
        seconds = 59;
        minutes = 59;
      } else if (minutes == 0 && seconds == 0 && hours == 0) {
        this.countdown = hours + ":" + minutes + ":" + seconds;
      }
    }
    if (hours >= 0) {
      this.triggerCounter = setInterval(countdown, 1000);
    }
  }

  shot() {
    // gets the text of shot Button
    let currentShot = document.getElementById('buttonShot').textContent;
    if (currentShot == "Start") {
      // Changes text of button
      currentShot = "Stop";
      document.getElementById('buttonShot').textContent = currentShot;

      this.currentCounters = JSON.parse(localStorage.getItem("currentCounters"));
      let currentHours = "00";
      let currentMinutes = "00";
      let currentSeconds = "00";
      if (this.currentCounters == null || this.currentCounters[parseInt(this.valueSelected)] == null) {
        currentHours = this.countersInfo[this.valueSelected].counter;
      } else {
        currentHours = this.currentCounters[parseInt(this.valueSelected)].hours;
        currentMinutes = this.currentCounters[parseInt(this.valueSelected)].minutes;
        currentSeconds = this.currentCounters[parseInt(this.valueSelected)].seconds;
      }
      this.coutdown(parseInt(currentHours), parseInt(currentMinutes), parseInt(currentSeconds));
    } else {
      // Pause coutdown removing setInterval
      clearInterval(this.triggerCounter);

      // Changes text of button
      currentShot = "Start";
      document.getElementById('buttonShot').textContent = currentShot;

      // Save countdown in localstorage
      let currentCounter = this.countdown.split(":");
      console.log(currentCounter);
      this.currentCounters[this.valueSelected] = {
        "hours": currentCounter[0],
        "minutes": currentCounter[1],
        "seconds": currentCounter[2]
      };
      localStorage.setItem("currentCounters", JSON.stringify(this.currentCounters));
    }
  }

}

