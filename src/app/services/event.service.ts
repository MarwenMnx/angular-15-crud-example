import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Event } from '../models/event.model';

const baseUrl = 'http://localhost:8089/Evenement';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor(private http: HttpClient) { }

  
  getAll(): Observable<Event[]> {
    return this.http.get<Event[]>(`${baseUrl}/allEvents`);
  }

  create(data: any): Observable<any> {
    return this.http.post(`${baseUrl}/addEvent`, data);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/updateEvent/${id}`, data);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/deleteEvent/${id}`);
  }

}
