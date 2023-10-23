document.addEventListener('DOMContentLoaded', function () {
    const weightInput = document.getElementById('weight');
    const heightInput = document.getElementById('height');
    const calculateButton = document.getElementById('calculate');
    const resultContainer = document.getElementById('result');
    const bmiElement = document.getElementById('bmi');
    const statusElement = document.getElementById('status');
    const viewDietButton = document.getElementById('view-diet');
    const dietPlan = document.getElementById('diet-plan');

    calculateButton.addEventListener('click', calculateBMI);
    viewDietButton.addEventListener('click', showDietPlan);

    function calculateBMI() {
        const weight = parseFloat(weightInput.value);
        const height = parseFloat(heightInput.value) / 100; // Convert height to meters
        const bmi = (weight / (height * height)).toFixed(2);

        if (isNaN(bmi)) {
            Toastify({
                text: 'Please enter valid weight and height.',
                backgroundColor: 'red',
            }).showToast();
            return;
        }

        resultContainer.classList.remove('hidden');
        bmiElement.textContent = bmi;

        if (bmi < 18.5) {
            statusElement.textContent = 'Underweight';
        } else if (bmi >= 18.5 && bmi < 25) {
            statusElement.textContent = 'Normal';
        } else {
            statusElement.textContent = 'Overweight';
        }
    }

    function showDietPlan() {
        dietPlan.classList.remove('hidden');
        const underweightDiet = document.getElementById('underweight-diet');
        const normalDiet = document.getElementById('normal-diet');
        const overweightDiet = document.getElementById('overweight-diet');

        if (statusElement.textContent === 'Underweight') {
            underweightDiet.classList.remove('hidden');
        } else if (statusElement.textContent === 'Normal') {
            normalDiet.classList.remove('hidden');
        } else {
            overweightDiet.classList.remove('hidden');
        }
    }
});
