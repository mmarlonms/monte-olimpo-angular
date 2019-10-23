import { Component, OnInit, Input, EventEmitter } from '@angular/core';
import { AuthService } from 'src/app/services/auth-service';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    @Input() error: string | null;
  
    form: FormGroup = new FormGroup({
        username: new FormControl(''),
        password: new FormControl(''),
    });

    constructor(
        private authService: AuthService,
        private router: Router,
    ) { }

    ngOnInit() {
    }

    submit() {
        if (this.form.valid) {
            this.login(this.form.value.username,this.form.value.password)
        }
      }

    login(username: string, password: string) {

        this.authService.login(username, password).subscribe(
            success => this.router.navigate(['app/dashboard']),
            error => this.error = error
        );
    }

}
