const form = document.getElementById('myform');
const nomInput = document.getElementById('inputnom');
const prenomInput = document.getElementById('inputprenom');
const entrepriseInput = document.getElementById('inputentreprise');
const projectInput = document.getElementById('inputproject');
const adresseMailInput = document.getElementById('inputadressemail');



function validateForm(event) {
  event.preventDefault(); 

 
  if (nomInput.value.trim() === '') {
    alert('Veuillez entrer votre nom.');
    return;
  }

  if (prenomInput.value.trim() === '') {
    alert('Veuillez entrer votre prénom.');
    return;
  }


  if (projectInput.value.trim() === '') {
    alert('decris le projet en quelques mots.');
    return;
  }

  if (adresseMailInput.value.trim() === '') {
    alert('Veuillez entrer votre adresse e-mail.');
    return;
  }

  


  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(adresseMailInput.value)) {
    alert('Veuillez entrer une adresse e-mail valide.');
    return;
  }

 const nomPrenomPattern = /^[A-Za-zÀ-ÿ\-\s]+$/;
  if (!nomPrenomPattern.test(nomInput.value)) {
    alert('Le champ nom ne doit contenir que des lettres.');
    return;
  }

  if (!nomPrenomPattern.test(prenomInput.value)) {
    alert('Le champ prénom ne doit contenir que des lettres.');
    return;
  }

  
  alert('Formulaire validé ! Redirection en cours...');
  window.location.href = 'pageenvoi.html';


  form.reset();
}


form.addEventListener('submit', validateForm);


