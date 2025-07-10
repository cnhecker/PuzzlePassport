export interface EscapeRoom {
  id: number;
  name: string;
  street: string;
  city: string;
  state: string;
  zipCode: string;
}

export interface VisitedEscapeRoom {
  id: number;
  name: string;
  dateVisited: Date | null;
}