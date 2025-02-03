document.getElementById('imcForm').addEventListener('submit', function(event) {
    event.preventDefault();


    const height = parseFloat(document.getElementById('height').value);
    const weight = parseFloat(document.getElementById('weight').value);


    const imc = weight / (height * height);

    let category = '';
    if (imc < 18.5) {
        category = 'Sous-poids';
    } else if (imc >= 18.5 && imc < 25) {
        category = 'Poids normal';
    } else if (imc >= 25 && imc < 30) {
        category = 'Surpoids';
    } else {
        category = 'Obésité';
    }


    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `Votre IMC est de <strong>${imc.toFixed(2)}</strong> (${category}).`;
});
        
    