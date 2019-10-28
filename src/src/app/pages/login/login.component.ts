import { Component, OnInit, Input, EventEmitter } from '@angular/core';
import { AuthService } from 'src/app/services/auth-service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent  {

    constructor(
        private authService: AuthService,
        private router: Router,
    ) { }

    login(username: string, password: string) {

        this.authService.login(username, password).subscribe(
            success => this.router.navigate(['app/dashboard']),
        );
    }
}