import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonItem, IonLabel, IonToggle, IonSelect, IonSelectOption, IonIcon, IonButton, IonAlert } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { logOutOutline } from 'ionicons/icons';
import type { OverlayEventDetail } from '@ionic/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonItem, IonLabel, IonToggle, IonSelect, IonSelectOption, IonIcon, IonButton, IonAlert], 
})
export class Tab3Page {
  public alertButtons = [
    {
      text: 'Más Tarde',
      role: 'cancel',
      handler: () => {
        console.log('Alerta cancelada');
      },
    },
    {
      text: 'Calificar',
      role: 'confirm',
      handler: () => {
        console.log('Alerta confirmada');
      },
    },
  ];

  setResult(event: CustomEvent<OverlayEventDetail>) {
    console.log(`Alerta cerrada con el resultado: ${event.detail.role}`);
  }
  constructor() {
    addIcons({ logOutOutline });
  }
}
