import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable} from 'rxjs';
import { catchError,  tap } from 'rxjs/operators';

import { UtilService } from './util-service'

import { God } from '../models/god';

@Injectable({
    providedIn: 'root'
})
export class GodService {

    private apiUrl = 'https://localhost:5001/api/v1/god/';
    private httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    constructor(private http: HttpClient, private utilService: UtilService) { }

    getAllGods(): Observable<God[]> {
        return this.http.get<God[]>(this.apiUrl + "getallgods")
            .pipe(
                tap(_ => this.utilService.log('fetched Gods')),
                catchError(this.utilService.handleError<God[]>('getGods', []))
            );
    }

    getCoreException(): Observable<God> {
        return this.http.get<any>(this.apiUrl + "getcoreexception")
            .pipe(
                tap(_ => this.utilService.log('fetched Gods')),
                catchError(this.utilService.handleError<God>('getCoreException'))
            );
    }

    getException(): Observable<God> {
        return this.http.get<God>(this.apiUrl + "getexception")
            .pipe(
                tap(_ => this.utilService.log('fetched Gods')),
                catchError(this.utilService.handleError<God>('getException'))
            );
    }

    /** DELETE: delete the God from the server */
    deleteGod(God: God | number): Observable<God> {
        const id = typeof God === 'number' ? God : God.id;
        const url = this.apiUrl + `deltegod?id=${id}`;

        return this.http.delete<God>(url).pipe(
            tap(_ => this.utilService.log(`deleted God id=${id}`)),
            catchError(this.utilService.handleError<God>('deleteGod'))
        );
    }

      /** UPDATE: update the God in the server */
     updateGod(God: God): Observable<any> {
        return this.http.put(this.apiUrl + "updategod", God, this.httpOptions).pipe(
            tap(_ => this.utilService.log(`updated God id=${God.id}`)),
            catchError(this.utilService.handleError<any>('updateGod'))
        ); 
    }

     /** INSERT: Add the God in the server */
     addGod (God: God): Observable<God> {
         
        return this.http.post<God>(this.apiUrl+"creategod", God,this.httpOptions).pipe(
            tap((newGod: God) => this.utilService.log(`added God id=${newGod.id}`)),
            catchError(this.utilService.handleError<God>('addGod'))
        );
    }
}
