using API.Services.Person;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;

namespace UI.Controllers.Person
{
    [ApiController]
    //[Route("[controller]")]
    public class PersonController : ControllerBase
    {
        private readonly PersonService personService;
        public PersonController() 
        {
            personService = new PersonService();
        }

        [Route("api/GetPerson/{id}")]
        public HttpResponseMessage GetPerson(int id)
        {
            var response = new HttpResponseMessage(System.Net.HttpStatusCode.OK);
            var json = JsonConvert.SerializeObject(personService.GetPerson(id));
            response.Content = new StringContent(json);

            return response;
        }
    }
}
