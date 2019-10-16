import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Http, Response } from '@angular/http';

import { Observable, of, from } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { UtilService } from './util'

import { God } from '../models/god';

@Injectable({
    providedIn: 'root'
})
export class GodService {

    private apiUrl = 'https://localhost:5001/api/v1/god/getallgods';
    private httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
      };

    constructor(private http: HttpClient, private utilService : UtilService) { }

    getAllGods(): Observable<God[]> {
        return this.http.get<God[]>(this.apiUrl)
          .pipe(
            tap(_ => this.utilService.log('fetched Produtos')),
            catchError(this.utilService.handleError<God[]>('getGods', []))
          );
      }


}
