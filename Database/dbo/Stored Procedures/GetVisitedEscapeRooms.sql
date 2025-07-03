CREATE PROCEDURE [dbo].[GetVisitedEscapeRooms]
	@PersonId int
AS
	SELECT EscapeRoom.ER_Id, EscapeRoom.ER_Name, UserVisitedEscapeRoom.DateVisited 
	FROM UserVisitedEscapeRoom 
	INNER JOIN EscapeRoom ON EscapeRoom.ER_Id=UserVisitedEscapeRoom.EscapeRoomId
	WHERE UserVisitedEscapeRoom.PersonId=@PersonId