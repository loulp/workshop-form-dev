import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { login } from 'src/shared/store/actions/auth.actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  // Declaration de variables
  email: string = '';
  password: string = '';

  constructor(private router: Router, private store: Store<{ isLog: boolean }>) {}

  ngOnInit(): void {
    // Appel d'une fonction (à la création du composant dans ce cas)
    this.testInit();
  }

  // Declaration de fonctions
  submit() {
    if (this.email === 'email' && this.password === 'pass') {
      this.store.dispatch(login({ email: this.email, password: this.password }));
      
      this.router.navigateByUrl('/unitBoard');
    }
  }

  testInit() {
    console.log('init');
  }
}
