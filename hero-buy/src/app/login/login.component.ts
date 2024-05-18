import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  auth: any;
    constructor (private ofAuth: AngularFireAuth) {
  
}

login() {
  this.ofAuth.signInWithRedirect(new firebase.auth.GoogleAuthProvider());
}

}
