import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MatCardModule, MatMenuModule, MatListModule, MatButtonModule, MatIconModule, MatSidenavModule } from '@angular/material'

import { MaterialModule} from './material-module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { fromEventPattern } from 'rxjs';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { SidebarComponent } from './sidebar/sidebar.component';

import { DashboardComponent} from './dashboard/dashboard.component';
import { IndicadorComponent } from './indicador/indicador.component'

@NgModule({
    declarations: [
        AppComponent,
        SidebarComponent,
        DashboardComponent,
        IndicadorComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatCardModule,
        MatMenuModule,
        MatButtonModule,
        MatIconModule,
        MatSidenavModule,
        MatListModule,
        LayoutModule,
        MatToolbarModule,
        MaterialModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
