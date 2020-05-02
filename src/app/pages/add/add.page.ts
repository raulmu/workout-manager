import { Component, OnInit } from '@angular/core';
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
  repeatsNum: number = 8;

  constructor(
    private modalCtrl: ModalController, 
    private dataService: LocalService,
    public toastController: ToastController ) { }

  ngOnInit() {
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
      done: false,
      order: this.dataService.workouts.length + 1,
      repeatsNum: this.repeatsNum,
      setsNum: this.setsNum
    };
    this.dataService.addWorkout(workout);
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
    this.setsNum = this.setsNum > 1 ? this.setsNum : 1;
  }

  changeRepeatsNum(value: number) {
    this.repeatsNum += value;
    this.repeatsNum = this.repeatsNum > 1 ? this.repeatsNum : 1;
  }

}
