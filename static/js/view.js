import model from './model.js';

function render() {
    const app = document.getElementById('app');
    app.innerHTML = `
        <div id="initial-page">
            <div id="radio-buttons-container"></div>
            <div class="button-container">
                <button id="submit-button" class="button">Submit</button>
            </div>
        </div>
        <div id="results-page" style="display: none;">
            <div id="results"></div>
            <div class="button-container">
                <button id="back-button" class="button">Back</button>
            </div>
        </div>
    `;
    generateRadioButtons();
    document.getElementById('submit-button').addEventListener('click', showResultsPage);
    document.getElementById('back-button').addEventListener('click', showInitialPage);
}

function generateRadioButtons() {
    const container = document.getElementById('radio-buttons-container');
    container.innerHTML = '';

    Object.entries(model.questions).forEach(([role, questionsArray]) => { 
        questionsArray.forEach(question => { 
            const questionContainer = document.createElement('div');
            questionContainer.classList.add('question-container');

            const questionText = document.createElement('p');
            questionText.textContent = question;
            questionContainer.appendChild(questionText);

            const slider = document.createElement('input');
            slider.type = 'range';
            slider.min = -2;  
            slider.max = 2;    
            slider.value = 0;  
            slider.step = 1;   
            slider.name = role; 
            slider.classList.add('slider');

            const valueDisplay = document.createElement('span');
            valueDisplay.textContent = slider.value;
            valueDisplay.classList.add('slider-value');

            slider.addEventListener('input', () => {
                valueDisplay.textContent = slider.value;
            });

            questionContainer.appendChild(slider);
            questionContainer.appendChild(valueDisplay);

            container.appendChild(questionContainer);
        });
    });
}

function showResultsPage() {
    updateResults();
    document.getElementById('initial-page').style.display = 'none';
    document.getElementById('results-page').style.display = 'block';
}

function showInitialPage() {
    document.getElementById('initial-page').style.display = 'block';
    document.getElementById('results-page').style.display = 'none';
}

function updateResults() {
    const resultsContainer = document.getElementById('results');
    resultsContainer.innerHTML = '';

    const roleScores = {};
    Object.keys(model.roles).forEach(role => {
        roleScores[role] = 0;
    });

    const sliders = document.querySelectorAll('.slider');
    sliders.forEach(slider => {
        const role = slider.name; 
        roleScores[role] += parseInt(slider.value);
    });

    let highestRole = null;
    let highestScore = -Infinity;
    Object.keys(roleScores).forEach(role => {
        if (roleScores[role] > highestScore) {
            highestScore = roleScores[role];
            highestRole = role;
        }
    });

    if (highestRole !== null) {
        const roleElement = document.createElement('div');
        roleElement.classList.add('result-container'); // Add this line to apply the CSS class
        const roleIndex = Object.keys(model.roles).indexOf(highestRole);
        roleElement.textContent = `Your role is: ${model.teamModel[roleIndex].name}`;
        const descriptionElement = document.createElement('p');
        descriptionElement.textContent = model.teamModel[roleIndex].description;
        roleElement.appendChild(descriptionElement); // Append description to roleElement
        resultsContainer.appendChild(roleElement);
    }
}

render();