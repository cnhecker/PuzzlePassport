CREATE TABLE [dbo].[Person]
(
	[P_Id] INT IDENTITY (1,1) NOT NULL PRIMARY KEY, 
    [P_FirstName] VARCHAR(50) NOT NULL, 
    [P_LastName] VARCHAR(50) NOT NULL, 
    [P_DateOfBirth] DATE NULL, 
    [P_Password] VARCHAR(200) NOT NULL, 
    [P_Username] VARCHAR(50) NOT NULL, 
    [P_EmailAddress] VARCHAR(100) NOT NULL
)
