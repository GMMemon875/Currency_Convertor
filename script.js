const dropdown = document.querySelectorAll(".dropdown select");

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
  // console.log(FlagApi);
  let img = element.parentElement.querySelector("img");
  img.src = FlagApi; // setting src attribute with the help of API
};
