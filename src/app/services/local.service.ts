import { Injectable, OnInit } from '@angular/core';
import { Workout } from '../model/workout.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LocalService {

  workouts: Workout[];
  workoutsSubject = new Subject<Workout[]>();

  // demoWorkouts = [
  //   {"id":"1","summary":"Supino reto","done":0,"order":1,"repeatsNum":8,"setsNum":4, "seconds": 40},
  //   {"id":"2","summary":"Supino inclinado","done":0,"order":2,"repeatsNum":10,"setsNum":4, "seconds": 40},
  //   {"id":"3","summary":"Paralelas","done":0,"order":3,"repeatsNum":6,"setsNum":4, "seconds": 40},
  //   {"id":"4","summary":"Crucifixo ou crossover","done":0,"order":4,"repeatsNum":10,"setsNum":4, "seconds": 40},
  //   {"id":"5","summary":"Abdominal no pulley","done":0,"order":5,"repeatsNum":10,"setsNum":3, "seconds": 40},
  //   {"id":"6","summary":"Abdominal com carga","done":0,"order":6,"repeatsNum":10,"setsNum":3, "seconds": 40}
  // ];

  demoWorkouts = [{"id":"1183690148","summary":"Cardio","done":0,"order":1,"repeatsNum":0,"setsNum":3,"seconds":30},{"id":"4276131127","summary":"Abdominal 2/1","done":0,"order":2,"repeatsNum":0,"setsNum":3,"seconds":40},{"id":"1057215337","summary":"Abdominal Pedalada","done":0,"order":3,"repeatsNum":0,"setsNum":3,"seconds":40},{"id":"2729239836","summary":"Prancha Isométrica","done":0,"order":4,"repeatsNum":0,"setsNum":3,"seconds":40},{"id":"2707350576","summary":"Abdominal Infra","done":0,"order":5,"repeatsNum":0,"setsNum":3,"seconds":40},{"id":"4275236009","summary":"Abdominal Power","done":0,"order":6,"repeatsNum":0,"setsNum":3,"seconds":40},{"id":"3381693861","summary":"Cardio","done":0,"order":7,"repeatsNum":0,"setsNum":3,"seconds":30},{"id":"63297899","summary":"Abdominal 90","done":0,"order":8,"repeatsNum":0,"setsNum":3,"seconds":40},{"id":"533719211","summary":"Abdominal Feet TG","done":0,"order":9,"repeatsNum":0,"setsNum":3,"seconds":40},{"id":"3455780740","summary":"Prancha Isométrica","done":0,"order":10,"repeatsNum":0,"setsNum":3,"seconds":40},{"id":"3967829477","summary":"Canoa","done":0,"order":11,"repeatsNum":0,"setsNum":3,"seconds":40},{"id":"1843533744","summary":"Abdominal Remador","done":0,"order":12,"repeatsNum":0,"setsNum":3,"seconds":40},{"id":"3024340249","summary":"Cardio","done":0,"order":13,"repeatsNum":0,"setsNum":3,"seconds":30}];

  constructor() {
    this.workouts = JSON.parse(localStorage.getItem('workouts'));
    localStorage.setItem('demo-workouts', JSON.stringify(this.demoWorkouts));
    this.workouts = this.workouts ? this.workouts : JSON.parse(localStorage.getItem('demo-workouts'));
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

  demonstrationsValue() {
    localStorage.removeItem('workouts');
    this.workouts = JSON.parse(localStorage.getItem('demo-workouts'));
    this.workouts = this.workouts ? this.workouts : [];
    this.workoutsFetch();
  }

  clearWorkouts(){
    this.workouts = [];
    this.workoutsFetch();
  }

}
