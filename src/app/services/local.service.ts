import { Injectable, OnInit } from '@angular/core';
import { Workout } from '../model/workout.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LocalService {

  workouts: Workout[];
  workoutsSubject = new Subject<Workout[]>();

  demoWorkouts = [{"id":"1459366701","summary":"Supino reto","done":false,"order":1,"repeatsNum":8,"setsNum":4},{"id":"922281826","summary":"Supino inclinado","done":false,"order":2,"repeatsNum":10,"setsNum":4},{"id":"2506175336","summary":"Paralelas","done":false,"order":3,"repeatsNum":6,"setsNum":4},{"id":"1890047782","summary":"Crucifixo ou crossover","done":false,"order":4,"repeatsNum":10,"setsNum":4},{"id":"2146980483","summary":"Abdominal no pulley","done":false,"order":5,"repeatsNum":10,"setsNum":3},{"id":"2951019810","summary":"Abdominal com carga","done":false,"order":6,"repeatsNum":10,"setsNum":3}];

  constructor() {
    this.workouts = JSON.parse(localStorage.getItem('workouts'));
    this.workouts = this.workouts ? this.workouts : this.demoWorkouts;
  }

  addWorkout(workout: Workout) {
    workout.id = this.provisoryIdGen(workout);
    this.workouts.push(workout);
    this.workoutsFetch();
  }

  updateWorkout(workout: Workout) {
    this.workouts = this.workouts.filter(x => x.id != workout.id);
    this.workouts.push(workout);
    this.workoutsFetch();
  }

  deleteWorkout(workout: Workout){
    this.workouts = this.workouts.filter(x => x.id != workout.id);
    this.updateWorkoutsOrderValue();
    this.workoutsFetch();
  }

  updateWorkoutsOrderValue() {
    let reorderWorkouts = [];
    let order = 0;
    this.workouts.forEach(element => {
      order++;
      element.order = order;
      reorderWorkouts.push(element);
    });
    this.workouts = reorderWorkouts;
  }

  provisoryIdGen(workout: Workout) {
    return this.stringToHash(workout.summary.trim() + workout.order);
  }

  stringToHash(s: string): string {
    s = s + Math.floor(Math.random() * 100000);
    for (var i = 0, h = 0xdeadbeef; i < s.length; i++)
      h = Math.imul(h ^ s.charCodeAt(i), 2654435761)
    return ((h ^ h >>> 16) >>> 0).toString();
  }

  workoutsFetch() {
    this.workouts = this.workouts.sort((work1, work2) => {
      return (work1.order > work2.order) ? 1 : -1
    });
    this.workoutsSubject.next(this.workouts);
    localStorage.setItem('workouts', JSON.stringify(this.workouts));
  }

  clearWorkouts(){
    this.workouts = this.demoWorkouts;
    this.workoutsFetch();
  }

}
