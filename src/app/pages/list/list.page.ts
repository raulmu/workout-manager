import { Component, OnInit, OnDestroy } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Subscription } from 'rxjs';

import { AddPage } from '../add/add.page';
import { LocalService } from 'src/app/services/local.service';
import { Workout } from 'src/app/model/workout.model';

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
          this.workouts = workouts;
        }
      ));
    this.dataService.workoutsFetch();
  }

  ngOnDestroy() {
    this.subscritions.unsubscribe();
  }

  async showAddModal(workout: Workout) {
    const modal = await this.modalController.create({
      component: AddPage,
      componentProps: {
        'workout': workout
      }
    });
    return await modal.present();
  }

  updateWorkout(workout: Workout, value: number) {
    workout.done+=value;
    workout.done = workout.done < 0 ? 0 : workout.done;
    workout.done = workout.done > workout.setsNum ? workout.setsNum : workout.done;
    this.dataService.updateWorkout(workout);
  }

  removeWorkout(workout: Workout) {
    this.dataService.deleteWorkout(workout);
  }

  clearWorkouts(){
    this.dataService.clearWorkouts();
  }
  
  demoWorkouts(){
    this.dataService.demonstrationsValue();
  }

  showWorkout(workout: Workout) {
    this.showAddModal(workout);
  }

}

