import { Component, OnInit, OnDestroy } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Subscription } from 'rxjs';

import { AddPage } from '../add/add.page';
import { LocalService } from 'src/app/services/local.service';

@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss'],
})
export class ListPage implements OnInit, OnDestroy {

  JSON = JSON;

  workouts = [];

  subscritions = new Subscription();

  constructor(private modalController: ModalController, private dataService: LocalService) { }

  ngOnInit() {
    this.subscritions.add(
      this.dataService.workoutsSubject.subscribe(
        (workouts) => {
          console.log(workouts);
          this.workouts = workouts;
        }
      ));
    this.dataService.workoutsFetch();
  }

  ngOnDestroy() {
    this.subscritions.unsubscribe();
  }

  async showAddModal() {
    const modal = await this.modalController.create({
      component: AddPage
    });
    return await modal.present();
  }

  updateWorkout(workout) {
    console.log(workout);
    this.dataService.updateWorkout(workout);
  }

}
