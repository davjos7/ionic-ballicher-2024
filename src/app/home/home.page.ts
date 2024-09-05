import { Component } from '@angular/core';
import { IonicModule} from '@ionic/angular';
import { RouterModule,Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule],
})
export class HomePage {
  constructor(private router : Router) {}

  elegirPreferencia(){
    this.router.navigate(['/preferencia'])
  }
}
