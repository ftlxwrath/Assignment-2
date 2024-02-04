const countryData = require("../data/countryData");
const regionData = require("../data/regionData");


let countries = [];



let Initialize  = () => {
    let region;
    return new Promise((resolve, reject) => {

        countryData.forEach((country,index) => {
            region = regionData.find( c  => c.id == country.regionId);
            countries[index] = {...country, region};
        });
        resolve("countries has been successfully filled");
    })
    
}


let getAllCountries = () =>{
    return new Promise((resolve, reject) => {
        try {
            resolve(countries);
        } catch (error) {
            reject(error);
        }
    })
}

let getCountryByCode = (countryCode) =>{
    return new Promise((resolve, reject) => {
        try {
            resolve(countries.find((country,index) => country.a2code.toUpperCase() == countryCode.toUpperCase()));    
        } catch (error) {
            reject("unable to find the country you requested for");
        }
    }) 
}


let getCountriesByRegion = (region) =>{
    return new Promise((resolve, reject) => {
        try {
            resolve(countries.filter(country => country.region.name.toUpperCase()==region.toUpperCase()));    
        } catch (error) {
            reject("unable to find the country you requested for");
        }
    })
}



module.exports = { Initialize, getAllCountries, getCountryByCode, getCountriesByRegion };
















