import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { IonicModule} from '@ionic/angular';
import { RouterModule,Router} from '@angular/router';

import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule,NgFor,RouterModule],
})
export class HomePage {
  estados:any = []

  constructor(private router : Router, private http: HttpClient) {
    this.http.get("https://cesar.pe/wp-json/ismem/estados").subscribe(
      data => {
        console.log("estados", data);
        this.estados = data;
      }
    )
  }

  elegirPreferencia(){
    this.router.navigate(['/preferencia'])
  }
}
