console.log("Client side javascript file is loaded!");

const weatherForm = document.querySelector("form");
const search = document.querySelector("input");
const meesageOne = document.querySelector("#message-one");
const meesageTwo = document.querySelector("#message-two");

weatherForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const location = search.value;
  meesageOne.textContent = "Loading...";
  meesageTwo.textContent = "";
  fetch(`/weather?address=${location}`).then((response) => {
    response.json().then((data) => {
      if (data.error) {
        meesageOne.textContent = "";
        meesageTwo.textContent = data.error;
      } else {
        meesageOne.textContent = "";
        meesageTwo.textContent = `Forecast for ${data.location} is ${data.forecast}`;
      }
    });
  });
});
