export interface Event {
    idEv?: number;
    eventName?: string;
    description?: string;
    date?: string;
    time?: string;
    eventStatus?: string;
    location?: string;
    eventType?: EventType;
  }
  
  export enum EventType {
    Voyage = 'voyage',
    CircuitTouristique = 'Circuit_touristique',
    CampingSauvage = 'Camping_sauvage'
  }
  