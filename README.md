# Webscrap

This project will scrape the website to render subscription packages with details, sorted by price highest to lower.

FrontEnd of this project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.0.6. 
> it will consume /scraper endpoint published in nodejs and render information in well designed UI

BackEnd of this project was generated with [NodeJs] version 18.16.0
> it will process website, extract necessary information using `cheerio` and `axios` packages and return in form of JSON object

## Code scaffolding

Frontend : [`cd ./ws-client`](https://github.com/swetangdev/webscrap/tree/master/ws-client)

Backend: [`cd ./ws-server`](https://github.com/swetangdev/webscrap/tree/master/ws-server)

For both Frontend and Backend, run `npm i` to install all dependencies.


-------------------------------------

# RUN

## Running Backend server

In terminal locate server directory : cd ./ws-server

run `node index`

## Running Frontend client

In terminal locate client directory : cd ./ws-client

run  `ng serve` or `npm start`

## In browser

Navigate to `http://localhost:4200/` and click on button [**Scrap it!**]

----------------------------------------------------------------------------------------------


## Running unit tests: 

Frontend : [`cd ./ws-client`](https://github.com/swetangdev/webscrap/tree/master/ws-client)

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

------------------------------------------------------------------------------------------------

### Ref Demo 

![image](https://github.com/swetangdev/webscrap/assets/46344128/28b7b123-3b9a-4225-bc8b-1331002b12e2)
