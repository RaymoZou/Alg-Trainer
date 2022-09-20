// settings overlay
function settingsOverlayOn() {
    document.getElementById('settings-overlay').style.display = 'block';
};
function settingsOverlayOff() {
    document.getElementById('settings-overlay').style.display = 'none';
};
document.querySelector('.settings-button').addEventListener('click', function(e) {
    settingsOverlayOn();
    e.stopPropagation();
});

document.getElementById('settings-overlay').addEventListener('click', function(e) {
    settingsOverlayOff();
    e.stopPropagation();
})
document.getElementById('page').addEventListener('click', function() {
    settingsOverlayOff();
});

// instructions overlay
function instructionsOverlayOn() {
    document.getElementById('instructions-overlay').style.display = 'block';
}
function instructionsOverlayOff() {
    document.getElementById('instructions-overlay').style.display = 'none';
};
document.querySelector('.instructions-button').addEventListener('click', function(e) {
    instructionsOverlayOn();
    e.stopPropagation();
});
document.getElementById('instructions-overlay').addEventListener('click', function(e) {
    instructionsOverlayOff();
    e.stopPropagation();
})
document.getElementById('page').addEventListener('click', function() {
    instructionsOverlayOff();
});

// alg credits overlay
function algCreditsOverlayOn() {
    document.getElementById('alg-credits-overlay').style.display = 'block';
}
function algCreditsOverlayOff() {
    document.getElementById('alg-credits-overlay').style.display = 'none';
};
document.querySelector('.alg-credits-button').addEventListener('click', function(e) {
    algCreditsOverlayOn();
    e.stopPropagation();
});
document.getElementById('alg-credits-overlay').addEventListener('click', function(e) {
    algCreditsOverlayOff();
    e.stopPropagation();
})
document.getElementById('page').addEventListener('click', function() {
    algCreditsOverlayOff();
});


// alg overlay
function algOverlayOn() {
    document.getElementById('alg-overlay').style.display = 'flex';
}
function algOverlayOff() {
    document.getElementById('alg-overlay').style.display = 'none';
};
document.querySelector('.alg-button').addEventListener('click', function(e) {
    algOverlayOn();
    e.stopPropagation();
});
document.getElementById('alg-overlay').addEventListener('click', function(e) {
    algOverlayOff();
    e.stopPropagation();
})
document.getElementById('page').addEventListener('click', function() {
    algOverlayOff();
});

