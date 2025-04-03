CREATE PROCEDURE [dbo].[GetPerson]
	@PersonId int
AS
	SELECT * FROM Person
	WHERE P_Id = @PersonId
