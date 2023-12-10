import { Component } from '@angular/core';
import { Reservation, TypeR } from 'src/app/models/reservation.model';
import { ReservationService } from 'src/app/services/reservation.service';

@Component({
  selector: 'app-add-reservation',
  templateUrl: './add-reservation.component.html',
  styleUrls: ['./add-reservation.component.css']
})
export class AddReservationComponent {
  constructor(private reservationService: ReservationService) { }
  reservation: Reservation = {
    checkIn: '',
    checkOut: '',
    valid: false  };
  submitted = false;



  saveReservation(): void {
    const data = {
      checkIn: this.reservation.checkIn,
      checkOut: this.reservation.checkOut,
      valid: this.reservation.valid,
      typeReservation: this.reservation.typeReservation,
    };

    this.reservationService.create(data)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.submitted = true;
        },
        error: (e) => console.error(e)
      });
  }
}
