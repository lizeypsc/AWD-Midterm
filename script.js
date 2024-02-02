function fallOff(petal) {
    const desisyon1 = document.getElementById('desisyon1').value;
    const desisyon2 = document.getElementById('desisyon2').value;

    const desisyons = [desisyon1, desisyon2];
    const randomDesisyon = desisyons[Math.floor(Math.random() * desisyons.length)];

    petal.style.transition = 'top 1s linear';
    petal.style.top = '500px'; 

    setTimeout(() => {
        petal.textContent = randomDesisyon;
        petal.remove();
        displayFinalDecision(randomDesisyon);
    }, 1000); 
}

function displayFinalDecision(decision) {
    const popupElement = document.createElement('div');
    popupElement.classList.add('popup');
    popupElement.textContent = `Decision: ${decision}`;

    document.body.appendChild(popupElement);

    setTimeout(() => {
        popupElement.remove();
    }, 1000);
}
