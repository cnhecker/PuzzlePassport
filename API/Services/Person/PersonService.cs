using API.Models.EscapeRoom;
using API.Models.Person;
using API.Repositories.Person;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace API.Services.Person
{
    public class PersonService
    {
        private readonly PersonRepository personRepository;

        public PersonService() 
        {
            personRepository = new PersonRepository();
        }

        public Models.Person.Person GetPerson(int personId)
        {
            return personRepository.GetPerson(personId);
        }

        public List<VisitedEscapeRoom> GetVisitedEscapeRooms(int personId)
        {
            return personRepository.GetVisitedEscapeRooms(personId);
        }
    }
}
