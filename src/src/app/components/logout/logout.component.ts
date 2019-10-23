import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth-service';
import { Router } from '@angular/router';

@Component({
    selector: 'logout',
    templateUrl: './logout.component.html',
    styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

    constructor(private authService: AuthService,  private router: Router) { }

    logout() {
        this.authService.logout();
        this.router.navigate(['login']);
    }

    ngOnInit() {
    }

}
