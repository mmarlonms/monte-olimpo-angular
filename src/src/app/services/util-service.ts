import { Injectable, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { NotificationsService, NotificationType } from 'angular2-notifications';

@Injectable({
    providedIn: 'root'
})
export class UtilService  {
    
    temp= {
        timeOut: 5000,
        showProgressBar: true,
        pauseOnHover: true,
        clickToClose: true,
        animate: 'fromRight'
    };
    
    constructor( private _notifications: NotificationsService) { }

    public log(message: string) {
        console.log(`ProdutoService: ${message}`);
    }

    public showCoreExceptionNotification(message, boddy) {	
		this._notifications.create(message, boddy, NotificationType.Warn, this.temp)
    }

    public showValidationNotification(message, mesages) {	     

        mesages.forEach(element => {
            var boddy = element.key +" : "+ element.message;
            this._notifications.create(message, boddy, NotificationType.Warn, this.temp)
        });
    }

    public showExceptionNotification(message, boddy) {
		this._notifications.create(message, boddy, NotificationType.Error, this.temp)
    }

    public handleError<T>(operation = 'operation', result?: T) {

        return (error: any): Observable<T> => {
            debugger
            if (error.status == 400) {
                this.showCoreExceptionNotification(error.error.errors[0].key, error.error.errors[0].message);
            } else if(error.status == 401 || error.status == 403){
                this.showExceptionNotification("Não Autorizado", "Ops.. você não pode fazer isso!");  
            }else if (error.status == 420) {
                this.showValidationNotification("Validação de entrada", error.error.errors);
            }
             else {
                this.showExceptionNotification("Ocorreu um erro não esperado.", "Favor verificar junto ao administrador do sistema. LogEntry: " + error.error.logEntryId);
            }

            this.log(`${operation} failed: ${error.message}`);

            return of(result as T);
        };
    }
}