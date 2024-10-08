import { Component, OnInit } from '@angular/core';
import { IonicModule, NavController} from '@ionic/angular';
import { RouterModule,Router} from '@angular/router';
import { NgFor } from '@angular/common';
import * as preferencia from '../../assets/json/preferencias.json';


@Component({
  selector: 'app-preferencia',
  templateUrl: './preferencia.page.html',
  styleUrls: ['./preferencia.page.scss'],
  standalone: true,
  imports: [IonicModule,NgFor,RouterModule]
})
export class PreferenciaPage{
  data:any = preferencia;
  constructor(private nav : NavController,private router: Router) {
    console.log("preferencia",this.data);
   }
  regresar(){
    this.nav.back();
  }
  elegirRecetas(){
    this.router.navigate(['/recetas'])
  }

}
