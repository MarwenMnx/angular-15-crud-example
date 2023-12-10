import { Component } from '@angular/core';
import { EventService } from '../../services/event.service';
import { Event } from '../../models/event.model';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent {

  events?: Event[];
  currentEvent: Event = {};
  currentIndex = -1;
  title = '';

  constructor(private eventService: EventService) { }

  ngOnInit(): void {
    this.retrieveEvents();
  }

  refreshList(): void {
    this.retrieveEvents();
    this.currentIndex = -1;
  }
  retrieveEvents(): void {
    this.eventService.getAll()
      .subscribe({
        next: (data) => {
          this.events = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

  deleteEvent(id:any):void{

    this.eventService.delete(id).subscribe({
      next: (data) => {
        this.events = data;
        console.log(data);
        this.refreshList();
      },
      error: (e) => console.error(e)
    });
  }

}
