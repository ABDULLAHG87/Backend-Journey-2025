/**
 * ESSENTIAL JAVASCRIPT FOR BACKEND SERIES
 * CONCEPT: Working with fetch and axios command
 * DATE: 4th July, 2025
 */

import axios from "axios";

fetch("https://restcountries.com/v3.1/name/nigeria")
    .then(response => {
        if (!response.ok){
            throw new Error("Network response was not OK");
        } 
        return response.json();
    })
    .then(data => {
        console.log(data);
        // const country = data[0];
        // console.log("Country Name: ", country.name.common);
        // console.log("Capital: ", country.capital[0]);
        // console.log("Region: ", country.region);
        // console.log("Population: ", country.population);
    })
    .catch(error => {
        console.error("There was a problem with the fetch operations:", error);
    });

//Using the Async function method

async function getCountryInfo(countryName) {
    try { 
        const res = await fetch(`https://restcountries.com/v3.1/name/${countryName}`);
        if (!res.ok){
            throw new Error("Failed to fetch country Data");
        }

        const data = await res.json();
        const country = data[0];
        console.log("Country Name: ", country.name.common);
        console.log("Capital: ", country.capital[0]);
        console.log("Region: ", country.region);
        console.log("Population: ", country.population);
        console.log("Language: ", country.languages.eng);
    } catch (err) {
        console.error("Error fetching Data: ", err);
    }
}

getCountryInfo("nigeria");

//Using Axios

async function fetchData(countryName){
    try {
        const response = await axios.get(`https://restcountries.com/v3.1/name/${countryName}`);
        const country = response.data[0];
        console.log(country);
        console.log("Country Name: ", country.name.common);
        console.log("Capital: ", country.capital[0]);
        console.log("Region: ", country.region);
        console.log("Population: ", country.population);
        console.log("Language: ", country.languages.eng);
    } catch (error){
        console.error("Data could not be fetch: ", error.message);
    }
}

fetchData("south africa");
