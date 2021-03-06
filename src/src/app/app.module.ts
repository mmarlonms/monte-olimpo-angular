import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { MaterialModule } from './material-module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule ,HTTP_INTERCEPTORS} from '@angular/common/http';

import { fromEventPattern } from 'rxjs';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic'
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { IndicadorComponent } from './components/indicador/indicador.component';
import { GodComponent } from './pages/god/god.component'

import { GodService } from './services/god-service.service'
import { UtilService } from './services/util-service';
import { GodModalCreateUpdate } from './components/god-modal/god-modal-create-update/god-modal-create-update.component'
import { GodModalDelete } from './components/god-modal/god-modal-delete/god-modal-delete.component';
import { FormsModule,ReactiveFormsModule  }   from '@angular/forms';

import { SimpleNotificationsModule } from 'angular2-notifications';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { AuthGuard, AuthService, AuthInterceptor } from './services/auth-service';
import { LogoutComponent } from './components/logout/logout.component';
import { FlexLayoutModule } from '@angular/flex-layout';


@NgModule({
    declarations: [
        AppComponent,
        SidebarComponent,
        DashboardComponent,
        IndicadorComponent,
        GodComponent,
        GodModalCreateUpdate,
        GodModalDelete,
        LoginComponent,
        SignupComponent,
        LogoutComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        HttpClientModule,
        LayoutModule,
        MatToolbarModule,
        MaterialModule,
        FormsModule,
        ReactiveFormsModule ,
        FlexLayoutModule,
        SimpleNotificationsModule.forRoot()
    ],
    entryComponents: [GodModalCreateUpdate,GodModalDelete],
    providers: [GodService, UtilService, AuthService,
        AuthGuard,
        {
          provide: HTTP_INTERCEPTORS,
          useClass: AuthInterceptor,
          multi: true,
        },],
    bootstrap: [AppComponent]
})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);