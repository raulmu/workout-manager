import { Component, OnInit, Input } from '@angular/core';
import { ModalController, ToastController } from '@ionic/angular';

import { LocalService } from 'src/app/services/local.service';
import { Workout } from 'src/app/model/workout.model';

@Component({
  selector: 'app-add',
  templateUrl: './add.page.html',
  styleUrls: ['./add.page.scss'],
})
export class AddPage implements OnInit {

  summary: string = '';
  setsNum: number = 1;
  repeatsNum: number = 0;
  seconds: number = 0;
  buttonText = 'Adicionar';
  @Input() workout: Workout;

  constructor(
    private modalCtrl: ModalController, 
    private dataService: LocalService,
    public toastController: ToastController ) { }

  ngOnInit() {
    if(this.workout) {
      this.summary = this.workout.summary;
      this.setsNum = this.workout.setsNum;
      this.repeatsNum = this.workout.repeatsNum;
      this.seconds = this.workout.seconds;
      this.buttonText = 'Atualizar';
    }
    console.log(this.workout);
  }

  dismiss() {
    this.modalCtrl.dismiss({
      'dismissed': true
    });
  }

  save(){
    let workout: Workout = { 
      id: null, 
      summary: this.summary, 
      done: 0,
      order: this.dataService.workouts.length + 1,
      repeatsNum: this.repeatsNum,
      setsNum: this.setsNum,
      seconds: this.seconds
    };
    if(!this.workout){
      this.dataService.addWorkout(workout);
    } else {
      workout = this.workout;
      workout.summary = this.summary;
      workout.setsNum = this.setsNum;
      workout.repeatsNum = this.repeatsNum;
      workout.seconds = this.seconds;
      this.dataService.updateWorkout(workout);
    }
    this.savedMessage();
    this.dismiss();
  }

  async savedMessage() {
    const toast = await this.toastController.create({
      message: 'O exercício foi salvo.',
      duration: 1500,
      buttons: [
        {
          side: 'end',
          icon: 'close-outline',
          text: '',
          handler: () => {
          }
        }
      ]
    });
    toast.present();
  }

  changeSetsNum(value: number) {
    this.setsNum += value;
    this.setsNum = this.setsNum < 1 ? 1 : this.setsNum;
    this.setsNum = this.setsNum > 9 ? 9 : this.setsNum;
  }

  changeRepeatsNum(value: number) {
    this.repeatsNum += value;
    this.repeatsNum = this.repeatsNum > 0 ? this.repeatsNum : 0;
  }

  changeSeconds(value: number) {
    this.seconds += value;
    this.seconds = this.seconds > 0 ? this.seconds : 0;
  }

}
