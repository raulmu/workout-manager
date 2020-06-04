import { Component, OnInit, OnDestroy } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Subscription } from 'rxjs';

import { GoogleAnalyticsService } from '../../services/google-analytics.service';
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

  isPlayingWorkout = '';
  workoutPaused = '';
  secondsTotal = 0;
  interval;

  subscritions = new Subscription();

  constructor(private modalController: ModalController, 
    private dataService: LocalService,
    private googleAnalyticsService: GoogleAnalyticsService) { }

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
    const type = !workout ? 'Create' : 'Edit';
    this
    .googleAnalyticsService
    .eventEmitter("click", "showAddModal"+type, "Show Add Modal", 1);
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
    this
    .googleAnalyticsService
    .eventEmitter("click", "removeWorkout", "Remove a Workout", 1);
    this.dataService.deleteWorkout(workout);
  }

  clearWorkouts(){
    this
    .googleAnalyticsService
    .eventEmitter("click", "clearWorkouts", "Clear Workouts List", 1);
    this.dataService.clearWorkouts();
  }
  
  demoWorkouts(){
    this
    .googleAnalyticsService
    .eventEmitter("click", "demoWorkouts", "Load Demo Workouts List", 1);
    this.dataService.demonstrationsValue();
  }

  showWorkout(workout: Workout) {
    this.showAddModal(workout);
  }

  playWorkout(workout: Workout){
    this
    .googleAnalyticsService
    .eventEmitter("click", "playWorkout", "Play a Workout", 1);
    const audio = new Audio();
    const source = document.createElement("source");
    this.isPlayingWorkout = workout.id;
    this.workoutPaused = '';

    source.setAttribute(
      'src',
      './assets/sounds/beep-start.mp3'
    );

    source.setAttribute("type", "audio/mpeg");

    audio.append(source);
    audio.load();
    audio.play();

    this.secondsTotal = workout.seconds;
    window.setTimeout(() => {
      this.isPlayingWorkout = workout.id;
      this.workoutPaused = '';
      this.interval = window.setInterval(() => this.toDo(workout), 1000);
    }, 3500);
  }
  
  stopWorkout(workout: Workout) {
    this
    .googleAnalyticsService
    .eventEmitter("click", "stopWorkout", "Stop a Workout", 1);
    if(this.isPlayingWorkout === workout.id){
      this.isPlayingWorkout = '';
      window.clearInterval(this.interval);
      workout.seconds = this.secondsTotal;
    }
  }

  pauseWorkout(workout: Workout) {
    this
    .googleAnalyticsService
    .eventEmitter("click", "pauseWorkout", "Pause a Workout", 1);
    if(this.isPlayingWorkout === workout.id){
      this.workoutPaused = workout.id;
      window.clearInterval(this.interval);
    }    
  }

  toDo(workout: Workout) {
    if (!workout.seconds) {      
      const audio = new Audio();
      const source = document.createElement("source");
      source.setAttribute(
        "src",
        "./assets/sounds/trim-stop.mp3"
      );
      source.setAttribute("type", "audio/mpeg");
      audio.append(source);
      audio.load();
      audio.play();
      window.clearInterval(this.interval);
      this.isPlayingWorkout = '';
      workout.seconds = this.secondsTotal;
      if(workout.done < workout.setsNum){
        this.updateWorkout(workout, 1);
      }
    } else {
      workout.seconds = workout.seconds - 1;
    }
  }

}

