# PuzzlePassport
An app for Lance, Ben, and Chelsey to practice code

# Development Workflow
- Create and/or assign yourself to a JIRA and put it in progress. 
- Create a new branch named after the JIRA, all lowercase. For example, puz-1
- Once work is complete on the branch, make a pull request and assign the other engineers for review. 
- Once you have at least one approval (but preferably all approvals) merge the pull request and delete the branch. 

# Clean Coding Practices
- The UI should be as dumb as possible. We should put as much logic as we can in the API code. This makes it easier to swap out the UI framework, in the future, if we wanted to. It also makes the code more testable, if we ever add integration tests. 
- The controller code should have as little logic as possible. This code is just a middle-man between the UI code and the backend code so 90% of the time, the function in the controller will be able to be boiled down to simply calling the service code. 
- The service classes in the API are where the meat of the logic is written. This is the middle-man between the controller and the repository. The controller should never call the repository directly. This code will perform any logic we need, including structuring the data in a way that the repository needs it and taking data from the repo and structuring it in a way the controller needs it. 
- The repository classes are what talk to the database. It'll call the stored procedures and pass any required parameters. It'll also pass the results (if there are any) back to the service. 
- Any SQL scripts/statements should be put into stored procedures. If we run into a case where this isn't feasible, the code building the script belongs in the repo. 
- Most, if not all, tables should have some sort of auto-incrementing recnum or id (whatever we want to call it) so that it can be used to easily link tables together. 
- Functions and variables should be named as descriptively as possible. The idea is that the code will be descriptive and readable enough that we don't need comments describing what's going on because the code will describe itself. 
- Functions should be small and if you feel like they're getting big, see if you can pull any of the code out into another function. 
- Functions should only do one thing, if at all possible, and shouldn't do more than the name of the function suggests. 
- Private variables should be lowerCamelCase
- Public variables and functions should be CamelCase

# Setup
## Setup Visual Studio

- Download visual studio community:
https://visualstudio.microsoft.com/free-developer-offers/

- Select ASP.NET and web development under Web & Cloud and .NET desktop development under Desktop & Mobile.
- Click Install
- In the setup where you pick your color scheme and other settings, choose C#
- Choose clone a repository
- Paste in this URL: https://github.com/martymcfly1985/PuzzlePassport.git
- Make the path C:\GIT

- Inside Visual Studio, at the top, select Extensions/Manage Extensions and add CodeMaid
- Close Visual Studio
- Right Click on Visual Studio and Select Properties/Shortcut/Advanced then check Run as Administrator and Apply the changes
- Open Visual Studio
- Inside Visual Studio hit Ctrl + Shift + B. This is a build and should hopefully install all the NuGet Packages I added but you should double-check and install any missing packages.

## Setup SQL Server
- Download the Free Developer Version of SQL Server 2019: https://www.microsoft.com/en-us/sql-server/sql-server-downloads
- Choose basic
- (ignore this. This was a note for me) Server=localhost;Database=master;Trusted_Connection=True;
- After the Installation has completed, Choose "Install SSMS" at the bottom
- Use the download link in the window that was opened to download SQL Server Management Studio 2019
- In Visual Studio, under the Database project, right click on the Local.publish.xml file and click open
- In the CreateNewDatabase node replace False with True
- Save the file
- Double-click the Local.publish.xml file
- Click "Load Values" then change the filepath that was loaded to match the appropriate path on your computer.
- Click Publish
- Open the Local.publish.xml file and change the value back to False.
- Open Sql Server Management Studio
- Type localhost as the server name then click Connect
- From the object explorer on the left, expand localhost/databases/PuzzlePassport/Tables
- There should be a table there called Person (I made that table) indicating the publish worked.
- Right click on localhost and go to properties/security
- Under Server authentication choose SQL Server and Windows Authentication Mode
- Click Ok and then Ok again, acknowledging the server needs restarted.
- Right click on localhost and choose restart
- Close all instances of SQL Server Management Studio and then reopen it.
- Sign back into localhost and under the object explorer go to localhost/security/logins
- Right click on logins and click New Login
- Choose Sql Server Authentication and make the login name PuzzlePassportUser and the password puzzlepassportuser123
- Uncheck the "Enforce Password Expiration" box
- Click Server Roles
- Check public and sysadmin
- Click User Mapping
- Check PuzzlePassport, at the top, and db owner and public, at the bottom
- Click Ok
- If you want to add records to the Person table, you can do that now, but it isn't required.

## Setup Visual Studio Code
- Download Visual Studio Code:https://code.visualstudio.com/
- Download Node.js: https://nodejs.org/en/
  - The one recommended for most users is fine
  - You don't need to download chocolatey, when it asks
- Open Visual Studio Code and Select File/Open Folder
- Select the react-ui folder under the PuzzlePassport folder
- On the left-hand side, select the 3rd item from top (labeled Source Control when you hover over it)
- Install what it suggests to install (Github for Windows)
- In that same area, select the item labeled extensions, when hovering over it, and install EsLint. 
- Restart Visual Studio Code
- Hit Ctrl~ to open the command prompt at the bottom of the screen. 
- Choose GitBash from the top right corner of the command prompt
- Type npm install

## Starting the App
- Open visual studio code and in the built-in command prompt at the bottom, type npm run dev.
- In Visual Studio click the green play button
- Open the link displayed in the vs code command prompt 

## ERROR HANDLING
- Proxy Connection Error - ECONNREFUSED  
In an elevated command prompt, enter the following commands  
  * netsh  
  * netsh>interface  
  * netsh interface>portproxy  
  * netsh interface portproxy>add v4tov6 listenport=3001 connectaddress=[::1] connectport=80 [80 was Ben's backend port]  
