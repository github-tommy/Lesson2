let rate = 300;
let numberHours = 100;
let tax = 0.1;
let exchangeRate = 1.4;
let downpayment = 5000;

console.log(((rate * numberHours - downpayment) * (1 + tax)) * exchangeRate);

//To calculate total consulting invoice based on 100 consulting hours at an hourly rate of USD300 -net of US$5000 downpayment. 10% VAT is to be included in the bill. The bill is quoted in Singapore dollar at an exchange rate of 1.4 USD/SGD.//