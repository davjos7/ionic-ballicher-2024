import { Component, OnInit } from '@angular/core';
import { IonicModule, NavController} from '@ionic/angular';


@Component({
  selector: 'app-preferencia',
  templateUrl: './preferencia.page.html',
  styleUrls: ['./preferencia.page.scss'],
  standalone: true,
  imports: [IonicModule]
})
export class PreferenciaPage{

  constructor(private nav : NavController) { }

  regresar(){
    this.nav.back();
  }

}
