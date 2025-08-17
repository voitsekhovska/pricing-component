"use strict";

const toggle = document.querySelector(".toggle");
const monthlyPrices = document.querySelectorAll(".monthly-price");
const annualPrices = document.querySelectorAll(".annual-price");

const togglePrice = () => {
  const showMonthly = toggle.checked;

  monthlyPrices.forEach((price) => {
    price.style.display = showMonthly ? "none" : "block";
  });
  annualPrices.forEach((price) => {
    price.style.display = showMonthly ? "block" : "none";
  });
};

toggle.addEventListener("change", togglePrice);
