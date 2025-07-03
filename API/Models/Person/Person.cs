using System;

namespace API.Models.Person
{
    public class Person
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public int Id { get; set; }
        public DateTime DateOfBirth { get; set; }
        public string Password { get; set; }
        public string Username { get; set; }
        public string EmailAddress { get; set; }
    }
}
