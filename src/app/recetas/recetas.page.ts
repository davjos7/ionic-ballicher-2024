import { Component, OnInit } from '@angular/core';
import { IonicModule, NavController} from '@ionic/angular';
import { RouterModule,Router} from '@angular/router';

@Component({
  selector: 'app-recetas',
  templateUrl: './recetas.page.html',
  styleUrls: ['./recetas.page.scss'],
  standalone: true,
  imports: [IonicModule],
})
export class RecetasPage {

  constructor(private nav : NavController) { }

  ngOnInit() {
  }
  regresaRecetas(){
    this.nav.back();
  }

}
