import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app';
import { Observable } from 'rxjs';
import { filter } from 'rxjs/operators';


@Component({
  selector: 'bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.scss']
})
export class BsNavbarComponent {

  user$:Observable<firebase.User | null>;
  constructor(private ofAuth: AngularFireAuth) {
    this.user$ = ofAuth.authState.pipe(filter(user => user !== null));
  }
  logout () {
    this.ofAuth.signOut();

  }

}
