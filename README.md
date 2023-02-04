# Minneleagues

<img src="public/ML.png" >

## Table of Contents

- [Description](#description)
- [Built With](#built-with)
- [Prerequisites](#prerequisite)
- [Installation](#installation)
- [Usage](#usage)
    

## Description

MinneLeagues is a user-friendly directory for recreational sports leagues across the Twin-Cities and beyond! Users will be able to search for various sports leagues near them using a multitude of criteria, making the application a one stop shop for sports en. They will also be able to read information about the leagues, share it to others or themselves, and click an external link where they can sign up. Admin users have the functionality to add, edit, and delete leagues.

## Screenshots
<img src="public/ML1.png" >  
<br></br>
<br></br>
<img src="public/ML2.png" >
<br></br>
<br></br>
<img src="public/ML3.png" >
<br></br>
<br></br>
<img src="public/ML4.png" >
<br></br>
<br></br>
<img src="public/ML5.png" >
<br></br>
<br></br>


## Built With

<a href="https://www.w3schools.com/w3css/defaulT.asp"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg" height="40px" width="40px" /></a>
<a href="https://www.w3schools.com/html/"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg" height="40px" width="40px" /></a>
<a href="https://www.w3schools.com/js/default.asp"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" height="40px" width="40px" /></a>
<a href="https://www.postgresql.org/"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original.svg" height="40px" width="40px" /></a>
<a href="https://reactjs.org/"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" height="40px" width="40px" /></a>
<a href="https://redux.js.org/"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg" height="40px" width="40px" /></a>
<a href="https://nodejs.org/en/"><img src="https://github.com/devicons/devicon/blob/master/icons/nodejs/nodejs-plain.svg" height="40px" width="40px" /></a>
## Getting Started

This project should be able to run in your favorite IDE. I used VS code while building it. 
<a href="https://code.visualstudio.com/"><img src="https://github.com/devicons/devicon/blob/master/icons/vscode/vscode-original-wordmark.svg" height="40px" width="40px" /></a>

### Prerequisites
Before you get started, make sure you have the following software installed on your computer:

- [Node.js](https://nodejs.org/en/)

### Installation

1. Fork the repository
2. Copy the SSH key in your new repository
3. In your terminal type...  `git clone {paste SSH link}`
4. Navigate into the repository's folder in your terminal
5. Open VS Code (or editor of your choice) and open the folder
6. In the terminal of VS Code run `npm install` to install all dependencies
8. Create a database named `minneleagues` in PostgresSQL
If you would like to name your database something else, you will need to change `minneleagues` to the name of your new database name in `server/modules/pool.js`
9. The queries in the database.sql file are set up to create all the necessary tables that you need. Copy and paste those queries in the SQL query of the database. If you'd like to add dummy data in the database to test the app, you can run this command in your code editor terminal, psql -d minneleagues -f dummyDataDump.sql, which will create a postico database using the dummyDataDump.sql file.
10. Run `npm run server` in your VS Code terminal
11. Open a second terminal and run `npm run client`

## Usage

Once everything is installed and running it should open in your default browser - if not, navigate to http://localhost:3000/#/.

Application Presentation: Click Below. <a href="https://youtu.be/33QU9vWbEPo
" rel="video"><img src="public/ML6.png" alt="Picture of MinneLeague Presentation" /></a>

