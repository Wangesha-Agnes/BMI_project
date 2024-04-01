const readline = require('readline').createInterface({input:process.stdin,
output:process.stdout});

readline.question('Enter your height in meters:',(height) =>{
    readline.question('Enter your weight in kg:',(weight) => {
        const bmi = Math.round(weight / Math.pow(height, 2));
        if (bmi < 18.5){
            console.log('Your BMI is${bmi}, you are Underweight');
        }else if (bmi >= 18.5 && bmi<25){
            console.log('Your BMI is ${bmi}, you are normal weight');
        }else if (bmi >= 25 && bmi < 30){
            console.log('Your BMI is ${bmi}, you are overweight');
        }else if (bmi >= 30 && bmi < 35){
            console.log('Your BMI is ${bmi}, you are obese');
        }else {
            console.log('Your BMI is ${bmi}, you are clinically obese');
        }
        readline.close();
    });
});
