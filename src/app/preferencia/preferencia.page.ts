import { Component, OnInit } from '@angular/core';
import { IonicModule, NavController} from '@ionic/angular';
import { RouterModule,Router} from '@angular/router';



@Component({
  selector: 'app-preferencia',
  templateUrl: './preferencia.page.html',
  styleUrls: ['./preferencia.page.scss'],
  standalone: true,
  imports: [IonicModule]
})
export class PreferenciaPage{

  constructor(private nav : NavController,private router: Router) { }

  regresar(){
    this.nav.back();
  }
  elegirRecetas(){
    this.router.navigate(['/recetas'])
  }

}
