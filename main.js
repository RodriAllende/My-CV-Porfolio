document.getElementById('changeLanguageToSpanish').addEventListener('click', function() {
    loadTranslation('espanol.json');
});

document.getElementById('changeLanguageToEnglish').addEventListener('click', function() {
    loadTranslation('english.json');
});

function loadTranslation(languageFile) {
    fetch(languageFile)
        .then(response => response.json())
        .then(data => {
            document.getElementById('welcomeMessage').textContent = data.welcome_message;
            document.getElementById('contactLink').textContent = data.contact_us;
        })
        .catch(error => console.error(error));
}

// Carga el idioma predeterminado (puedes elegir uno al inicio)
loadTranslation('english.json');