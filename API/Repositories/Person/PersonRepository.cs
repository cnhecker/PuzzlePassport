using API.DataAccess;
using API.DataAccess.Models;
using API.Models.EscapeRoom;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;

namespace API.Repositories.Person
{
    public class PersonRepository
    {
        public PersonRepository() { }

        public Models.Person.Person GetPerson(int id)
        {
            var person = new Models.Person.Person();
            using (SqlConnection connection = new SqlConnection(Connection.ConnectionString))
            {
                SqlCommand command = new SqlCommand("GetPerson", connection);
                command.CommandType = CommandType.StoredProcedure;
                command.Parameters.Add("@PersonId", SqlDbType.Int).Value = id;
                command.Connection.Open();

                using (EnhancedSqlDataReader reader = new EnhancedSqlDataReader(command.ExecuteReader()))
                {
                    while (reader.Read())
                    {
                        person.FirstName = reader.GetStringOrNull("P_FirstName");
                        person.LastName = reader.GetStringOrNull("P_LastName");
                        person.Id = reader.GetInt32("P_Id");
                        person.DateOfBirth = reader.GetDateTime("P_DateOfBirth");
                        person.Password = reader.GetString("P_Password");
                        person.Username = reader.GetString("P_Username");
                        person.EmailAddress = reader.GetString("P_EmailAddress");
                    }
                }
            }

            return person;
        }

        public List<VisitedEscapeRoom> GetVisitedEscapeRooms(int personId)
        {
            var visitedEscapeRooms = new List<VisitedEscapeRoom>();
            using (SqlConnection connection = new SqlConnection(Connection.ConnectionString))
            {
                SqlCommand command = new SqlCommand("GetVisitedEscapeRooms", connection);
                command.CommandType = CommandType.StoredProcedure;
                command.Parameters.Add("@PersonId", SqlDbType.Int).Value = personId;
                command.Connection.Open();

                using (EnhancedSqlDataReader reader = new EnhancedSqlDataReader(command.ExecuteReader()))
                {
                    while (reader.Read())
                    {
                        var visitedEscapeRoom = new VisitedEscapeRoom();
                        visitedEscapeRoom.Id = reader.GetInt32("ER_Id");
                        visitedEscapeRoom.Name = reader.GetString("ER_Name");
                        visitedEscapeRoom.DateVisited = reader.GetNullableDateTime("DateVisited");
                        visitedEscapeRooms.Add(visitedEscapeRoom);
                    }
                }
            }

            return visitedEscapeRooms;
        }
    }
}
