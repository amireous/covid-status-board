"use strict";

const userInput = document.querySelector(".user-input");
const searchBtn = document.querySelector(".search-btn");
const errorElement = document.getElementById("error");
const loading = document.querySelector(".loading");

const countryName = document.getElementById("country-name");
const activeCasesNumber = document.getElementById("active-cases-number");
const criticalCasesNumber = document.getElementById("critical-cases-number");
const recoveredCasesNumber = document.getElementById("recovered-cases-number");
const totalCasesNumber = document.getElementById("total-cases-number");
const totalDeathsNumber = document.getElementById("deathes-cases-number");
const totalTestsNumber = document.getElementById("tests-cases-number");

let country = "iran";

searchBtn.addEventListener("click", function (e) {
  e.preventDefault();
  if (userInput.value === "" || userInput.value.length < 3)
    errorElement.textContent = "required at least 3 characters";
  else {
    country = userInput.value;
    getData(country);
    errorElement.textContent = "";
  }
  userInput.value = "";
  userInput.blur();
});

const getData = function (country) {
  loading.style.opacity = 1;
  fetch(`https://corona.lmao.ninja/v2/countries/${country}`)
    .then((response) => {
      if (!response.ok)
        throw new Error(`Country not found (${response.status})`);
      return response.json();
    })
    .then((data) => {
      setData(data);
      loading.style.opacity = 0;
    })
    .catch((err) => {
      loading.style.opacity = 0;
      errorElement.textContent = err.message;
    });
};

getData(country);

const setData = function (data) {
  countryName.textContent = data.country;
  activeCasesNumber.textContent = data.active;
  criticalCasesNumber.textContent = data.critical;
  recoveredCasesNumber.textContent = data.recovered;
  totalCasesNumber.textContent = data.cases;
  totalDeathsNumber.textContent = data.deaths;
  totalTestsNumber.textContent = data.tests;
};