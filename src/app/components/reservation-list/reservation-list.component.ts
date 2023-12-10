import { Component } from '@angular/core';
import { Reservation } from 'src/app/models/reservation.model';
import { ReservationService } from 'src/app/services/reservation.service';

@Component({
  selector: 'app-reservation-list',
  templateUrl: './reservation-list.component.html',
  styleUrls: ['./reservation-list.component.css']
})
export class ReservationListComponent {
  reservations?: Reservation[];
  currentReservation: Reservation = {};
  currentIndex = -1;
  title = '';


  constructor(private reservationService: ReservationService) { }

  ngOnInit(): void {
    this.retrieveReservations();
  }


  retrieveReservations(): void {
    this.reservationService.getAll()
      .subscribe({
        next: (data) => {
          this.reservations = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

  refreshList(): void {
    this.retrieveReservations();
    this.currentIndex = -1;
  }


  deleteReservation(id:any):void{

    this.reservationService.delete(id).subscribe({
      next: (data) => {
        this.reservations = data;
        console.log(data);
        this.refreshList();
      },
      error: (e) => console.error(e)
    });
  }

}
