import { get } from "../CommonFunctions/HttpMethods";
import { VisitedEscapeRoom } from "../Models/EscapeRoom";
import { Person } from "../Models/Person";

export const fetchPerson = async (personId: number) => {
  return await get<Person>(`api/getperson/${personId}`);
};

export const fetchVisitedEscapeRooms = async(personId: number) => {
  return await get<VisitedEscapeRoom[]>(`api/getvisitedescaperooms/${personId}`);
};