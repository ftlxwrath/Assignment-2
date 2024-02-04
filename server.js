const express = require('express'); // "require" the Express module
// const { getAllCountries, Initialize } = require('./modules/unCountries');
const dataService = require('./modules/unCountries');
const app = express(); // obtain the "app" object
const HTTP_PORT = process.env.PORT || 8080; // assign a port
// http://localhost:8080
// start the server on the port and output a confirmation to the console
function onHttpStart() {
    console.log("Express http server listening on: " + HTTP_PORT);
}


app.get(('/'),(req,res)=>{
    res.send(`<p>Web Assignment 2, Student Id: 123603219 Student Name: Mohammed Abbas Ali<p>
        <ul>
            <li><a href='/un/countries'>click here to go to un/countries<a></li>
            <li><a href='/un/countries/region-demo'>click here to go to un/countries/region-demo<a></li>
            <li><a href='/un/countries/country-demo'>click here to go to un/countries/country-demo<a></li>
        </ul>
    
    `);
});
app.get(('/un/countries'),(req,res)=>{
    dataService.getAllCountries().then((countries)=>{
        res.json(countries);
    }).catch((err)=>{
        console.log('what is up with this: ', err);
    })

})

app.get(('/un/countries/region-demo'),(req,res)=>{
    dataService.getCountriesByRegion('oceania').then((countries)=>{
        res.json(countries);
    }).catch((err)=>{
        console.log('what is up with this: ', err);
    })

})

app.get(('/un/countries/country-demo'),(req,res)=>{
    dataService.getCountryByCode('ca').then((countries)=>{
        res.json(countries);
    }).catch((err)=>{
        console.log('what is up with this: ', err);
    })

})


dataService.Initialize()
.then(()=>{
app.listen(HTTP_PORT,onHttpStart);
})

