function calculateCalories() {
    var age = parseInt(document.getElementById('age').value);
    var height = parseInt(document.getElementById('height').value);
    var weight = parseFloat(document.getElementById('weight').value);
    var gender = document.getElementById('gender').value;
    var workout = document.getElementById('workout').value;

    var bmr; 
    if (gender === 'male') { 
        bmr = 10 * weight + 6.25 * height - 5 * age + 5;
    } else {
        bmr = 10 * weight + 6.25 * height - 5 * age - 161;
    }

    var totalCalories = 0;

    if (workout === 'light') {
        totalCalories = bmr * 1.375;
    } else if (workout === 'moderate') {
        totalCalories = bmr * 1.55;
    } else if (workout === 'heavy') {
        totalCalories = bmr * 1.725;
    } else if (workout === 'hard') {
        totalCalories = bmr * 1.9;
    }

    document.getElementById('result').innerHTML = 'Your daily calorie requirement is: ' + totalCalories.toFixed(2) + ' calories';
}