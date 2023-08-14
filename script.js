const totalCal = document.querySelector('#totalC');
const protein = document.querySelector('#protein');
let protein2 = document.querySelector('#proteinValue');
const carb = document.querySelector('#carb');
let carb2 = document.querySelector('#carbValue');
const fats = document.querySelector('#fat');
let fats2 = document.querySelector('#fatValue');
const proteinAmount = document.querySelector('#pCal');
const carbAmount = document.querySelector('#cCal');
const fatAmount = document.querySelector('#fCal');
const proteinGrams = document.querySelector('#pGrams');
const carbGrams = document.querySelector('#cGrams');
const fatGrams = document.querySelector('#fGrams');
const storedTotalCal = localStorage.getItem('totalCalValue');


if (storedTotalCal !== null) {
    totalCal.value = storedTotalCal;
}


function assess(){
    protein2.value = protein.value;
    let pCalories = totalCal.value * protein2.value/100;
    proteinAmount.textContent = pCalories + ' calories';
    proteinGrams.textContent = pCalories/4 + ' grams';

    carb2.value = carb.value;
    let cCalories = totalCal.value * carb2.value/100;
    carbAmount.textContent = cCalories + ' calories';
    carbGrams.textContent = cCalories/4 + ' grams';

    fats2.value = fats.value;
    let fCalories = totalCal.value * fats2.value/100;
    fatAmount.textContent = fCalories + ' calories';
    fatGrams.textContent = fCalories/4 + ' grams';
}

function assess2(){
    protein.value = protein2.value;
    let pCalories = totalCal.value * protein.value/100;
    proteinAmount.textContent = pCalories + ' calories';
    proteinGrams.textContent = pCalories/4 + ' grams';

    carb.value = carb2.value;
    let cCalories = totalCal.value * carb.value/100;
    carbAmount.textContent = cCalories + ' calories';
    carbGrams.textContent = cCalories/4 + ' grams';

    fats.value = fats2.value;
    let fCalories = totalCal.value * fats.value/100;
    fatAmount.textContent = fCalories + ' calories';
    fatGrams.textContent = fCalories/4 + ' grams';

}

function adjust1(){
    let pDelta = (protein.value-protein2.value);
    let pDenom = 100 - protein2.value;
    pchange = pDelta/pDenom;
    carb.value = carb.value - (carb.value * pchange);
    fats.value = fats.value - (fats.value * pchange);
}

function adjust1a(){
    let pDelta = (protein2.value-protein.value);
    let pDenom = 100 - protein.value;
    pchange = pDelta/pDenom;
    carb2.value = carb2.value - (carb2.value * pchange);
    fats2.value = fats2.value - (fats2.value * pchange);
}

function adjust2(){
    let cDelta = (carb.value-carb2.value);
    let cDenom = 100 - carb2.value;
    cChange = cDelta/cDenom;
    protein.value = protein.value - (protein.value * cChange);
    fats.value = fats.value - (fats.value * cChange);
}

function adjust2a(){
    let cDelta = (carb2.value-carb.value);
    let cDenom = 100 - carb.value;
    cChange = cDelta/cDenom;
    protein2.value = protein.value - (protein2.value * cChange);
    fats2.value = fats2.value - (fats2.value * cChange);
}

function adjust3(){
    let fDelta = (fats.value-fats2.value);
    let fDenom = 100 - fats2.value;
    fChange = fDelta/fDenom;
    protein.value = protein.value - (protein.value * fChange);
    carb.value = carb.value - (carb.value * fChange);
}

function adjust3a(){
    let fDelta = (fats2.value-fats.value);
    let fDenom = 100 - fats.value;
    fchange = fDelta/fDenom;
    carb2.value = carb2.value - (carb2.value * fchange);
    protein2.value = protein2.value - (protein2.value * fchange);
}


protein.addEventListener('mouseup', () => {adjust1(), assess()});
protein2.addEventListener('change', () => {
    adjust1a(); 
    assess2();
});
carb.addEventListener('mouseup', () => {adjust2(), assess()});
carb2.addEventListener('change', () => {
    adjust2a();
    assess2();
});
fats.addEventListener('mouseup', () => {adjust3(), assess()});
fats2.addEventListener('change', () => {
    adjust3a();
    assess2();
});
totalCal.addEventListener('input', () => {
    localStorage.setItem('totalCalValue', totalCal.value);
    proteinAmount.textContent = totalCal.value * protein2.value/100 + ' calories';
    carbAmount.textContent = totalCal.value * carb2.value/100 + ' calories';
    fatAmount.textContent = totalCal.value * fats2.value/100 + ' calories';
    
});


