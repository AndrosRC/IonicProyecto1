import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonDatetime, IonGrid, IonCol, IonRow, IonCard, IonCardHeader, IonCardContent, IonCardTitle, IonCardSubtitle } from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, ExploreContainerComponent, IonDatetime, IonGrid, IonCol, IonRow, IonCard, IonCardHeader, IonCardContent, IonCardTitle, IonCardSubtitle],
})
export class Tab2Page {

  constructor() {}

}
