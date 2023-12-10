import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Reservation } from '../models/reservation.model';



const baseUrl = 'http://localhost:8083/resv';

@Injectable({
  providedIn: 'root'
})


export class ReservationService {

  constructor(private http: HttpClient) { }


  getAll(): Observable<Reservation[]> {
    return this.http.get<Reservation[]>(`${baseUrl}/getAll`);
  }

  create(data: any): Observable<any> {
    return this.http.post(`${baseUrl}/add`, data);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/update/${id}`, data);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/delete/${id}`);
  }


  get(id: any): Observable<Reservation> {
    return this.http.get<Reservation>(`${baseUrl}/get/${id}`);
  }
}
