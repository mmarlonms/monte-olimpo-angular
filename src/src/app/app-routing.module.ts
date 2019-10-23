import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

import { GodComponent } from './pages/god/god.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { SignupComponent } from './pages/signup/signup.component';
import { LoginComponent } from './pages/login/login.component';
import { AuthGuard } from './services/auth-service';


const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'signup', component: SignupComponent },
    {
        path: 'app', component: SidebarComponent,canActivate: [AuthGuard] , children: [
            { path: 'dashboard', component: DashboardComponent, pathMatch: 'full' },
            { path: 'god', component: GodComponent, pathMatch: 'full' },
        ]
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
