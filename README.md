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


## SERVER

  cd server
  
  run npm start

  Kjører på http://localhost:7777


## CLIENT

  cd client
  
  run npm start

  Kjører på http://localhost:3000
  
## GMAIL

  username: gruppe1347.webapplikasjoner@gmail.com
  
  password: drossap8
  
## MAILTRAP

  Log in with gmail credentials
  
## .env

Vi har lagt ved en kopi av .env filene både til client og til server. Disse skal jo ligge i .zip-mappen.. men kjedelig om ting ikke fungerer som det skal...

  ----
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

  eks: 

```
{
	"name": "Mr. Robot",
	"email": "mr.robot@evilcorp.com",
	"username": "mr.robot",
	"password": "drossap8",
	"role": "super"
}
```


## Kontorer

  Her har vi laget en liten knapp til der.. trykk på den og databasen blir fylt med noen kontorer.. 
  De magiske tallene skal være 8, 5, 4, 4.. om dette ikke dukker opp, gi nettsiden en liten refresh 😉

  Vil du lage ditt eget kontor, så kan du det også. Implementeringen av modalen her er ikke helt på plass.. Men gode Postman kommer til unsetning nok en gang.

  eks:

  ```
    {
    name: 'Rørlegger',
    address: 'Rørleggerveien',
    phone: '69990000',
    location: 'fredrikstad',
    ingress:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr',
    employees: [
      { first: 'Ansatt', last: 'Ansatnavn', position: 'Stilling' },
      { first: 'Ansatt', last: 'Ansatnavn', position: 'Stilling' },
      { first: 'Ansatt', last: 'Ansatnavn', position: 'Stilling' },
      { first: 'Ansatt', last: 'Ansatnavn', position: 'Stilling' },
    ],
  },
  ```

## Artikler

  Her må dere dessverre lage deres egne.. ikke noen magisk knapp her.. igjen.. postman, bare husk å legge til en lokal fil 😉

  ```
  {
    "title": "My fourth article",
    "ingress": "Vi pusser opp små og mellomstore bad for privatkunder og entreprenører.",
    "content": "Lorem ipsum dolor sit amet",
    "category": "bad",
    "role": "user",
    "author": "Lars Larsen"
}
```