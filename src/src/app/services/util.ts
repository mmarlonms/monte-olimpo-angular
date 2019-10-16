import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';

declare var $: any;

@Injectable({
    providedIn: 'root'
})
export class UtilService {

    public log(message: string) {
        console.log(`ProdutoService: ${message}`);
    }
    /**
         * Handle Http operation that failed.
         * Let the app continue.
         * @param operation - name of the operation that failed
         * @param result - optional value to return as the observable result
         */
    public handleError<T>(operation = 'operation', result?: T) {

        function showCoreExceptionNotification(message, boddy) {

            $.notify({
                icon: "add_alert",
                message: "<b>" + message + "<b/><br /> " + boddy

            }, {
                type: 'warning',
                timer: 4000,
                placement: {
                    from: 'top',
                    align: 'right'
                }
            });
        }

        function showExceptionNotification(message, boddy) {

            $.notify({
                icon: "add_alert",
                message: "<b>" + message + "<b/><br /> " + boddy

            }, {
                type: 'danger',
                timer: 4000,
                placement: {
                    from: 'top',
                    align: 'right'
                }
            });
        }


        return (error: any): Observable<T> => {
            debugger

            if (error.status == 400) {
                showCoreExceptionNotification(error.error.errors[0].key, error.error.errors[0].message);
            } else {
                showExceptionNotification("Ocorreu um erro não esperado.", "Favor verificar junto ao administrador do sistema. LogEntry: " + error.error.logEntryId);
            }

            this.log(`${operation} failed: ${error.message}`);

            // Let the app keep running by returning an empty result.
            return of(result as T);
        };
    }

}