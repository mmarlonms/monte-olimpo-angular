import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SidebarComponent } from './sidebar/sidebar.component';


const routes: Routes = [
    { path: '', redirectTo: 'app/dashboard', pathMatch: 'full' },
    {
        path: 'app', component: SidebarComponent, children: [
            { path: 'dashboard', component: DashboardComponent, pathMatch: 'full' },
        ]
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
