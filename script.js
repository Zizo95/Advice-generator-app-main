const apiKey = "gQ+zx0DqBq4Z73iNUYQJYQ==Ovxd8MIf5f13ogJE";
const buttonEl = document.querySelector("button");

const options = {
  method : "GET",
  headers : {
      "X-Api-Key" : apiKey,
  }
}

buttonEl.addEventListener("click", () => { fetch('https://api.api-ninjas.com/v1/quotes?',options)
  .then(res => {
  return res.json();
})
.then(data => {
  
const adviceEl = document.querySelector("h2");
adviceEl.innerHTML = data[0].quote;

})
.catch(error => {
  console.error('Error fetching or processing data:', error);
});
})

