import { Injectable, OnInit } from '@angular/core';
import { Workout } from '../model/workout.model';

@Injectable({
  providedIn: 'root'
})
export class LocalService {

  workouts: Workout[];

  constructor() { 
    this.workouts = JSON.parse(localStorage.getItem('workouts'));
    this.workouts = this.workouts ? this.workouts : [];
  }

  addWorkout(workout: Workout) {
    workout.id = this.provisoryIdGen(workout);
    this.workouts.push(workout);
    localStorage.setItem('workouts', JSON.stringify(this.workouts));
  }

  provisoryIdGen(workout: Workout) {
    return this.stringToHash(workout.summary.trim()+workout.date);
  }

  stringToHash(s: string): string {
    s = s + Math.floor(Math.random() * 100000);
    for(var i = 0, h = 0xdeadbeef; i < s.length; i++)
        h = Math.imul(h ^ s.charCodeAt(i), 2654435761)
    return ((h ^ h >>> 16) >>> 0).toString();
  }
}
