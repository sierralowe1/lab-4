//Create an application that asks the user the height and then the weight of a person. Your application should assess the body mass index (BMI) category according to the following rules:
const UNDERWEIGHT = 18.5;
const NORMAL = 25;
const OVERWEIGHT = 30;
// calculates using inches and pounds
function calculateBMI() {
  let HEIGHT = document.getElementById("height").value;
  let WEIGHT = document.getElementById("weight").value;
  // Example: Weight = 150 lbs, Height = 5’5″ (65″) Calculation: [150 ÷ (65)2] x 703 = 24.96
  let BMI_Total = (WEIGHT / (Math.pow(HEIGHT, 2))) * 703;

  
  if (BMI_Total < UNDERWEIGHT) {
    // PRINTS CODE IN THE CONSOLE

    console.log("you are underweight" + BMI_Total);
        // PRINTS CODE IN THE INPUT BOX

        		document.getElementById('bmi').value = BMI_Total.toFixed(2) + " Under weight";
    
  } else if (BMI_Total <= NORMAL && BMI_Total > UNDERWEIGHT) {
    // PRINTS CODE IN THE CONSOLE
    console.log("You are Normal " + BMI_Total);
        // PRINTS CODE IN THE INPUT BOX
    		document.getElementById('bmi').value = BMI_Total.toFixed(2) + " Normal weight";

  } else if(BMI_Total >= OVERWEIGHT){
  // PRINTS CODE IN THE CONSOLE
    console.log("You reached Obesity congrats" + BMI_Total);
    // PRINTS CODE IN THE INPUT BOX
        		document.getElementById('bmi').value = BMI_Total.toFixed(2) + " Reached obesity";

  }else{
  
  
// PRINTS THE CODE IN THE INPUT BOX NOT THE CONSOLE
		console.log(BMI_Total);
    }
}