import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  error: any;
  constructor(public afAuth: AngularFireAuth,private router: Router) {
  this.afAuth.authState.subscribe(
         (auth) => {
           if(auth && auth.uid!=null){
             this.router.navigateByUrl("/createTracker");
           }
         }
    );
   }

   loginGoogle() {
    var provider = new firebase.auth.GoogleAuthProvider();
    this.afAuth.auth.signInWithPopup(provider).then(
        (success) => {
          console.log(success);
        this.router.navigate(['createTracker']);
      }).catch(
        (err) => {
        this.error = err;
      })
  }

  ngOnInit() {
  }

}
