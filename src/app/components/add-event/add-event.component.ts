import { Component } from '@angular/core';
import { EventService } from 'src/app/services/event.service';
import { Event } from '../../models/event.model';
@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.css']
})
export class AddEventComponent {
  constructor(private eventService: EventService) { }
  event: Event = {
    eventName: '',
      description: '',
      date: '',
      time: '',
      eventStatus: '',
      location: '',
      eventType: undefined,
  };
  submitted = false;


  saveEvent(): void {
    const data = {
      eventName: this.event.eventName,
      description: this.event.description,
      date: this.event.date,
      time: this.event.time,
      eventStatus: this.event.eventStatus,
      location: this.event.location,
      eventType: this.event.eventType
    };

    this.eventService.create(data)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.submitted = true;
        },
        error: (e) => console.error(e)
      });
  }

  newEvent(): void {
    this.submitted = false;
    this.event = {
      eventName: '',
      description: '',
      date: '',
      time: '',
      eventStatus: '',
      location: '',
      eventType: undefined,
    };
  }
}
