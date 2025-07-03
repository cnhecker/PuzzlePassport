CREATE TABLE [dbo].[UserVisitedEscapeRoom]
(
	[PersonId] INT NOT NULL, 
    [EscapeRoomId] INT NOT NULL
	
	PRIMARY KEY(PersonId, EscapeRoomId), 
    [DateVisited] DATETIME NULL
)

