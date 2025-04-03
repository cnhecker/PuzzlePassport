using API.DataAccess;
using API.DataAccess.Models;
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
            person.Id = id;
            person.FirstName = "Lance";
            person.LastName = "Hecker";
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
                    }
                }
            }

            return person;
        }
    }
}
