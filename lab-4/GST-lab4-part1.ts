//GST Calculator
//Create an application that calculates the amount of GST in a price that already includes GST ( GST inclusive price).

const GST_RATE = 0.15;

function calculateGST() {
//creating a variable defining the variable and retrieving the user input from HTML
let InclusivePrice = document.getElementById("priceIncGST").value;
//creating the variable assigning the value of inclusive price to it. 
let GST_Total = document.getElementById('gst').value;
//calculates the code
GST_Total = InclusivePrice - (InclusivePrice / (GST_RATE + 1));
// prints the value of the code in the console but not in the disabled input box
//console.log(GST_Total.toFixed(2));
//prints the code in the disabled input box
document.getElementById('gst').value = GST_Total.toFixed(2);
// 
