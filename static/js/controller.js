import model from './model.js';
import { render, updateResults } from './view.js';

function init() {
    document.addEventListener('DOMContentLoaded', () => {
        render(); 

        document.querySelectorAll('input[type="radio"]').forEach(input => {
            input.addEventListener('change', handleInputChange);
        });

        resetModel(); 
    });
}

function handleInputChange(event) {
    const { name, value } = event.target;
    const [role, index] = name.split('-'); 

    if (model.roles.hasOwnProperty(role)) {
        model.roles[role] += parseInt(value, 10);
    }

    updateResults(); 
}


function resetModel() {
    model.inputs.forEach(input => {
        input.value = null;
    });

    Object.keys(model.roles).forEach(role => {
        model.roles[role] = 0;
    });
}

init();
