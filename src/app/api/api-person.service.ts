import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, retry } from 'rxjs/operators';
import { ServiceObject } from '../service-object/service-object';

@Injectable({
  providedIn: 'root'
})

export class ApiPersonService {

  constructor(
    private httpClient: HttpClient
  ) { }

  insert(formData: FormData){
    return this.httpClient.post('http://localhost/appmobile20212/public/person/insert', formData).pipe(
    retry(3),
    catchError(error => null),
    map(response => response as ServiceObject));
  }

  listFavoriteLanguage(){
    return this.httpClient.get('http://localhost/appmobile20212/public/person/getPersonLanguage').pipe(
      retry(3), 
      catchError(error => null), 
      map(response => response as ServiceObject));
  }
  
}
