import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-counter-slides',
  templateUrl: './counter-slides.page.html',
  styleUrls: ['./counter-slides.page.scss'],
})

export class CounterSlidesPage implements OnInit {

  numberSlide: number;
  counter: any;
  formCounter = [];

  constructor(private activatedRoute: ActivatedRoute,
    private alertController: AlertController,
    private router: Router) { }

  ngOnInit() {
    this.numberSlide = parseInt(this.activatedRoute.snapshot.paramMap.get('numbersOfSlides'));
  }

  up(counter: any) {
    if (counter.value == "") {
      counter.value = 1;
    } else {
      counter.value++;
    }
  }

  down(counter: any) {
    if (counter.value == "" || counter.value == 1) {
      counter.value = 1;
    } else {
      counter.value--;
    }
  }

  // check if any input contains information
  validateInputs(title: any, description: any, counter: any) {
    if (title == "" && description == "" && counter == "") {
      return false;
    } else {
      return true;
    }
  }

  back(title: any, description: any, counter: any) {
    if (this.validateInputs(title.value, description.value, counter.value)) {
      // proceed if any input contains information
      console.log("some input filled");
      this.deleteCounters(false);
    } else {
      // proceed if all inputs are empty
      console.log("all inputs empty");
      this.deleteCounters(true);
    }
  }

  next(title: any, description: any, counter: any) {
    // get localStorage array
    this.formCounter = JSON.parse(localStorage.getItem("formCounter"));

    // Research if array in localStorage is empty
    if (this.formCounter == null) {
      this.formCounter = [];
      this.formCounter.push({
        "id": 0,
        "title": title.value,
        "description": description.value,
        "counter": parseInt(counter.value)
      });

      // save array in localStorage
      localStorage.setItem("formCounter", JSON.stringify(this.formCounter));

      // redirection to next interface if only have one counter for create
      if (this.formCounter.length == this.numberSlide) {
        this.router.navigate(['/tabs-counters']);
      }
    } else if (this.formCounter.length < this.numberSlide) {
      let index = this.formCounter.length - 1;
      this.formCounter.push({
        "id": index + 1,
        "title": title.value,
        "description": description.value,
        "counter": parseInt(counter.value)
      });
      // save array in localStorage
      localStorage.setItem("formCounter", JSON.stringify(this.formCounter));
      if (this.formCounter.length == this.numberSlide) {
        this.router.navigate(['/tabs-counters']);
      }
    } else if (this.formCounter.length == this.numberSlide) {
      this.router.navigate(['/tabs-counters']);
    }

    // Reset all inputs
    title.value = "";
    description.value = "";
    counter.value = 1;
  }

  async deleteCounters(authorization: boolean) {
    if (authorization) {
      localStorage.clear();
      this.router.navigate(['/home']);
    } else {
      const deleteAlert = await this.alertController.create({
        header: 'Sure delete all Counters?',
        buttons: [
          {
            text: 'Cancel',
            role: 'cancel',
          },
          {
            text: 'Delete',
            handler: () => {
              localStorage.clear();
              this.router.navigate(['/home']);
            },
          },
        ],
      });
      await deleteAlert.present();
    }
  }
}
