import { useEffect, useState } from "react";
import { Person } from "../Models/Person";
import { fetchPerson } from "../Actions/PersonActions";
import { message } from "antd";

function DisplayPerson() {
  const [person, setPerson] = useState<Person>();

  useEffect(() => {
    async function fetch() {
      try {
        setPerson(await fetchPerson(2));
      } catch {
        message.error("Something went wrong fetching the person");
      }
    }

    fetch();
  });

  return (
    <>
      <div>{person?.firstname}</div>
      <div>{person?.lastname}</div>
      <div>{person?.id}</div>
    </>
  );
}

export default DisplayPerson;