import { get } from "../CommonFunctions/HttpMethods";
import { Person } from "../Models/Person";

export const fetchPerson = async (personId: number) => {
  return await get<Person>(`api/getperson/${personId}`);
};
