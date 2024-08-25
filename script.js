function showMessage(photoNumber) {
    const messages = {
        1: "Every moment with you is like a beautiful dream come true.",
        2: "Your smile is the light that brightens my day.",
        3: "With you, every day feels like a fairytale.",
        4: "I never believed in love at first sight until I met you.",
        5: "You are the reason I wake up every morning with a smile.",
        6: "My heart is yours, now and forever.",
        7: "I LOVE YOU VEDU! Let's make our journey together even more special. Connect with me on Instagram: @_aviral_chaturvedi"
    };

    const message = messages[photoNumber];
    document.getElementById('popupMessage').textContent = message;

    // Show the popup
    document.getElementById('popup').style.display = 'block';
}

function closePopup() {
    document.getElementById('popup').style.display = 'none';
}
