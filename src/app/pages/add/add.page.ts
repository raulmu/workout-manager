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
      order: this.dataService.workouts.length + 1
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

}
