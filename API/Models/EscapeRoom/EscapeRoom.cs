using System;

namespace API.Models.EscapeRoom
{
    public class EscapeRoom
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Street { get; set; }
        public string City { get; set; }
        public string State { get; set; }
        public string ZipCode { get; set; }
    }

    public class VisitedEscapeRoom
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public DateTime? DateVisited { get; set; }
    }
}
