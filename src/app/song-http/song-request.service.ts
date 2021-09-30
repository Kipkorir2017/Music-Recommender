import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Song } from '../song';
import {User} from '../user';
import {environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  private song!: string;
  private artist!:string;
  constructor(private http:HttpClient) {
    
    this.song = "sql";
    this.artist="";
  }
  get_user(song:any):Observable<any> {
    return this.http.get("")
    .pipe((res =>res));
  }
  get_songs(song:any):Observable<any> {
    return this.http.get("")
    .pipe((res =>res));
  }
}