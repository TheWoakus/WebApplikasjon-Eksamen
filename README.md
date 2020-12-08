## ITF31619-1 20H - WEBAPPLIKASJONER - EKSAMEN 2020

For at alt skal starte så trenger vi følgende:

M.E.R.N
  -------
  
  MongoDB : https://docs.mongodb.com/manual/installation/
  
  Express 
  
  React
  
  Node    : https://nodejs.org/en/

  -------
  
  Kjør en kjapp npm install for å få med deg alle pakkene vi trenger.

  Etter at mongodb er satt opp, må det lages en database som heter "eksamen_2020_webapp" (all lowercase)

  Dette gjøres ved å: 

  Fyre opp mongo (last ned MongoDB Compass om du vil) 
  
  Skriv: use eksamen_2020_webapp
  
  Du skal nå få en bekreftelse på at du bruker databasen eksamen_2020_webapp
  
  Dessverre får du ikke se databasen før vi legger til en collection.. Fyr opp server og app, så fikser vi dette.

## Super og admin

  For å kunne lage en super eller admin bruker så må dette gjøres igjennom postman
 
  Dette blir en POST forespørsel til adresse: http://localhost:7777/api/v1/register

  Det tar imot formatet json og krever: 
  - name
  - email
  - username
  - password
  - role

  Role er default til user, men om man spesifiserer dette så kan man også sette til admin eller super.

  Dersom man skal være admin så skriver man inn "admin"

  Dersom man skal være super så skriver man inn "super"

## SERVER

  cd server
  
  run npm start

  Kjører på http://localhost:7777


## CLIENT

  cd client
  
  run npm start

  Kjører på http://localhost:3000
