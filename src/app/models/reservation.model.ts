export interface Reservation {
    numRes?: number;
    checkIn?: string;
    checkOut?: string;
    valid?: boolean;
    typeReservation?: TypeR;
  }
  
  export enum TypeR {
    Room = 'Room',
    Event = 'Event'
  }
  