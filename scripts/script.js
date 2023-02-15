//elements
const currencyOneEl = document.getElementById("currency-one");
const currencyTwoEl = document.getElementById("currency-two");
const amountOneEl = document.getElementById("amount-one");
const amountTwoEl = document.getElementById("amount-two");
const rateEl = document.getElementById("rate");
// btn
const swapBtn = document.getElementById("btn-swap");

// functions
function currencyConvertor() {
  //getting values
  let currency_One = currencyOneEl.value;
  let currency_Two = currencyTwoEl.value;

  fetch(`https://api.exchangerate-api.com/v4/latest/${currency_One}`)
    .then((resp) => resp.json())
    .then((data) => {
      const rate = data.rates[currency_Two];

      rateEl.innerText = `1 ${currency_One} = ${rate} ${currency_Two}`;

      amountTwoEl.value = (amountOneEl.value * rate).toFixed(2);
    });
}

// eventlistners
currencyOneEl.addEventListener("change", currencyConvertor);
amountOneEl.addEventListener("input", currencyConvertor);
currencyTwoEl.addEventListener("change", currencyConvertor);
amountTwoEl.addEventListener("input", currencyConvertor);

swapBtn.addEventListener("click", () => {
  let temp;
  temp = currencyOneEl.value;
  currencyOneEl.value = currencyTwoEl.value;
  currencyTwoEl.value = temp;

  currencyConvertor();
});

currencyConvertor();