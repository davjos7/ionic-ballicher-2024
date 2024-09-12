import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { IonicModule} from '@ionic/angular';
import { RouterModule,Router} from '@angular/router';
import * as estados from '../../assets/json/estados.json';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule,NgFor,RouterModule],
})
export class HomePage {

  data:any = estados;
  constructor(private router : Router) {
    console.log("recetas",this.data);
  }

  elegirPreferencia(){
    this.router.navigate(['/preferencia'])
  }
}
