import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

import { GodComponent } from './pages/god/god.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';


const routes: Routes = [
    { path: '', redirectTo: 'app/dashboard', pathMatch: 'full' },
    {
        path: 'app', component: SidebarComponent, children: [
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
