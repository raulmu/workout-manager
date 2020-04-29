import { Injectable, OnInit } from '@angular/core';
import { Workout } from '../model/workout.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LocalService {

  workouts: Workout[];
  workoutsSubject = new Subject<Workout[]>();

  constructor() {
    this.workouts = JSON.parse(localStorage.getItem('workouts'));
    this.workouts = this.workouts ? this.workouts : [];
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

}
