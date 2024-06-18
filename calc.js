function calculateCalories() {
    var age = parseInt(document.getElementById('age').value);
    var height = parseInt(document.getElementById('height').value);
    var weight = parseFloat(document.getElementById('weight').value);
    var gender = document.getElementById('gender').value;
    var workout = document.getElementById('workout').value;
    var result = document.getElementById('result');
    
    try {
        if (isNaN(age) || isNaN(height) || isNaN(weight) || !gender || !workout) {
            throw new Error('Please fill in all fields with valid values.');
        }

        var bmr;
        if (gender === 'male') { 
            bmr = 10 * weight + 6.25 * height - 5 * age + 5;
        } else if (gender === 'female') {
            bmr = 10 * weight + 6.25 * height - 5 * age - 161;
        } else {
            throw new Error('Invalid gender selected.');
        }

        var totalCalories;
        if (workout === 'light') {
            totalCalories = bmr * 1.375;
        } else if (workout === 'moderate') {
            totalCalories = bmr * 1.55;
        } else if (workout === 'heavy') {
            totalCalories = bmr * 1.725;
        } else if (workout === 'hard') {
            totalCalories = bmr * 1.9;
        } else {
            throw new Error('Invalid workout intensity selected.');
        }

        result.innerHTML = 'Your daily calorie requirement is: ' + totalCalories.toFixed(2) + ' calories';
    } catch (error) {
        result.innerHTML = error.message;
    }
}
