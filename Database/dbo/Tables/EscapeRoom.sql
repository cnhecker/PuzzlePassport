﻿CREATE TABLE [dbo].[EscapeRoom]
(
	[ER_Id] INT IDENTITY (1,1) NOT NULL PRIMARY KEY, 
    [ER_Name] VARCHAR(1000) NOT NULL, 
    [ER_Street] VARCHAR(1000) NOT NULL, 
    [ER_City] VARCHAR(1000) NOT NULL, 
    [ER_ZipCode] VARCHAR(50) NOT NULL, 
    [ER_State] VARCHAR(100) NOT NULL, 
)
