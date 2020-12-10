## Dokumentasjon til ITF31619-1 20H - WEBAPPLIKASJONER - EKSAMEN 2020

Source_code
  -------

Mye av koden vi har brukt har vi tatt fra tidligere obliger i dette faget. Vedlagt ligger .zip-mapper som ligger i mappen dokumenter/source_code fra oss begge som viser dette. 

Det er også blitt benyttet copy/paste av kode fra foreleser fra de fleste forelesninger.

Arbeidsoppgaver
  -------

Som i alle gruppeprosjekt, så er det noen som er bedre på visse felt enn andre. Vi har alikevel fordelt det meste på en ganske jevn måte føler vi selv. Her er en ca oversikt over fordelingen.


Kandidatnr | Prosjekt | Design | Frontend | Backend | Database | Autentisering/Autorisering
--- |--- | --- | --- | --- | --- | ---
*181356* | 1.5 | 0.3 | 1.5 | 1.5 | 1.5 | 2.7
*181350* | 1.5 | 2.7 | 1.5 | 1.5 | 1.5 | 0.3


Samarbeidet har fungert utmerket. Vi har benyttet GitHub til versjonskontroll, trello til planlegging og oversikt og discord til screen-sharing og samtaler. I tillegg har vi brukt Messenger og Slack ved behov.

Det dukker alltid opp situasjoner som man ikke hadde sett for seg. Vi opplevde spesielt to slike hendelser. 
- gruppering / filtrering av kontorer. 
 Her hadde vi en fin løsning som kunne filtrere, men den var ikke gruppert slik den gjerne skulle være. Og når vi endelig fikk grupert, så fungerte ikke filtreringen.. jobber fortsatt med saken og håper å bli ferdig før frist.
 Se i client/components/FetchOffices.jsx - Vi har valgt å la den være på gruppering, uten mulighet for filtrering. Se kommentarer i koden som gjør det mulig å bytte til filtrering og da miste gruppering. 

- url-query
 løsningen fungerte perfekt i postman. Men endte opp med å ta ned hele siden vår. Vi forsøkte å implementere det så godt vi kunne, men endte opp med å revert hele saken. Det er derfor vi hadde så masse reverts (skulle kanskje ha brukt en branch her 😝)
 Se server/utils/apiFilters.js , server/services/article.js. Her er det kommentert ut kode som gjorde det mulig for oss å bruke postman. Det er ikke denne koden som ordrett ble brukt da vi måtte fjerne masse. Skal også egentlig være kommentert ut kode i server/model/article.js også, men her tryner ting om man har kommentarer.. all kode som ble brukt til dette er så og si copy/paste fra forelesning med bare litt tilpassing til vårt prosjekt..
