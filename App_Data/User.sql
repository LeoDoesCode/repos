CREATE TABLE [dbo].[Table] 
(
	[ID] INT NOT NULL PRIMARY KEY, 
    [Name] NVARCHAR(100) NULL, 
    [IsAdmin] BIT NULL, 
    [Password] NVARCHAR(50) NULL, 
    [Email] NVARCHAR(50) NULL, 
    [Born] DATE NULL, 
    [Intro] NVARCHAR(500) NULL

)
