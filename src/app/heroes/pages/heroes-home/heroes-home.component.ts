import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/services/auth.service';
import { Auth } from '../../../auth/interfaces/auth.interface';

@Component({
  selector: 'app-heroes-home',
  templateUrl: './heroes-home.component.html',
  styles: [`
    .container {
      margin: 10px;
    }
    `
  ]
})
export class HeroesHomeComponent implements OnInit {

  get auth() {
    return this.authService.auth;
  }

  constructor( private router: Router,
              private authService: AuthService ) { }

  ngOnInit(): void {
  }

  logOut() {

    this.router.navigate(['./auth']);
  }

}
