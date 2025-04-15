import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
  })
  export class UserService {
    private uri = 'http://localhost:8080/api';
  
    constructor(private http:HttpClient) { }
    
    getAllUser(): Observable<any> {
    
      return this.http.get(this.uri);
    }
  }