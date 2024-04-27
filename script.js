const dropdown = document.querySelectorAll(".dropdown select");
const BTN = document.querySelector("from button");
const frmCurr = document.querySelector("#fromselect");
const tocurr = document.querySelector("#Toselect");

for (code in countryList) {
  // console.log(code, countryList[code]); // prints the code and corresponding value
}

for (let select of dropdown) {
  for (currcode in countryList) {
    // console.log(code, countryList[code]); // prints the code and corresponding value

    let opt = document.createElement("option"); // Dom target to selected option  and save to Opt varibale
    opt.innerText = currcode; // Dom Tareget and save  inner text as Currcode Value
    opt.value = currcode; // opt  value is same as inntertext because we are using it to compare with user input
    if (select.name === "from" && currcode == "USA") {
      // using if else condition we are set the selected  Option is Default or not
      opt.selected = true;
    } else if (select.name === "to" && currcode == "Pkr") {
      opt.selected = false;
    }
    // // console.log(currcode);
    select.append(opt); // selected  appending options into Select tag from Varibale Opt
  }
  select.addEventListener("change", (evt) => {
    //  Event Listener For Change Event it main flag change  event
    UpdateFlage(evt.target); // passing event  target values by calling function updatflage
  });
}
const UpdateFlage = (element) => {
  // update flag function  taking element as a parameter
  let currcode = element.value; // getting current value/ value main option (PK USD) of selected option
  let countryCode = countryList[currcode]; // getting Corresponding Flag From Countrylist Object
  let FlagApi = `https://flagsapi.com/${countryCode}/flat/64.png`; // Creating new API link with help of country Code
  // console.log(countryCode);
  let img = element.parentElement.querySelector("img");
  img.src = FlagApi; // setting src attribute with the help of API
};

BTN.addEventListener("click", (evt) => {
  evt.preventDefault();
  let amount = document.querySelector("#amount"); //getting input field value target to id amount from Html Dom
  let amountValue = amount.value; //getting input field value save amountvalue varible
  // console.log(amountValue);
  if (amountValue == "0" || amountValue == 0) {
    amountValue == 0; // not complete this
    amount.Value == "0";
    alert("Please enter an amount greater than zero!");
  }
  // console.log(frmCurr.value, tocurr.value);

  let url = `https://v6.exchangerate-api.com/v6/bbf95054d4f767f9570419fc/latest/${frmCurr.value}`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      let exChangerate = data.conversion_rates[tocurr.value]; // Getting Rates Data According To Selected
      // Your code to handle the response data goes here
      let totalExchangerate = (amountValue * exChangerate).toFixed(2);
      const result = document.querySelector(".result");
      result.innerText = `${amountValue}${frmCurr.value}= ${totalExchangerate}${tocurr.value}`;
      // console.log(result);
    });
});
