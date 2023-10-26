import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(private toastController: ToastController
    , private alertController: AlertController,
    private router: Router) {}
  // ion-sheets-button
  public actionSheetButtons = [
    {
      text: 'presentar Desafio Teorico',
     handler: () =>{
      this.router.navigate(['/examen'])
     }
    },
    {
      text: 'compartir',
      data: {
        action: 'compartir',
      },
    },
    {
      text: 'Cancelar',
      role: 'cancel',
      data: {
        action: 'cancelar',
      },
    },
  ];
  // Cards
  productos = [
    {
      img: 'https://cdn.pixabay.com/photo/2023/10/13/22/13/window-8313576_1280.jpg',
      title: 'Cortinas',
      name: 'Casa',
      topic: 'tono'
    },
    {
      img: 'https://cdn.pixabay.com/photo/2015/03/11/21/50/shutters-669296_1280.jpg',
      title: 'Ventana',
      name: 'Casa',
      topic: 'tono'
    },
    {
      img: 'https://cdn.pixabay.com/photo/2018/07/14/15/27/cafe-3537801_1280.jpg',
      title: 'Sillas',
      name: 'Casa',
      topic: 'tono'
    },
    {
      img: 'https://cdn.pixabay.com/photo/2016/07/28/19/38/lost-places-1549096_1280.jpg',
      title: 'Pared',
      name: 'desconocido',
      topic: 'tono'
    }
  ]
  // toasts
  async presentToast(msg: string) {
    const toast = await 
    this.toastController.create({
      message: msg,
      duration: 2000,
    });
    await toast.present();
  }
  // alert
  async presentAlert(e: Event, msg: string) {
    e.stopPropagation();
    const alert = await this.alertController.create({
      header: msg,
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
        },
        {
          text: 'OK',
          role: 'confirm'
        }
      ]
    })
    await alert.present();
  }
  
  preAlert(e: Event) {
    e.stopPropagation();
  }
}
