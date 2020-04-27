import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';

import { AddPage } from '../add/add.page';

@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss'],
})
export class ListPage {

  constructor(private modalController: ModalController) {}

  async showAddModal() {
    const modal = await this.modalController.create({
      component: AddPage
    });
    return await modal.present();
  }

}
