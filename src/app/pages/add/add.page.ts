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
      date: new Date()
    };
    this.dataService.addWorkout(workout);
    this.savedMessage();
    this.dismiss();
  }

  async savedMessage() {
    const toast = await this.toastController.create({
      message: 'O exercício foi salvo.',
      duration: 2000
    });
    toast.present();
  }

}
