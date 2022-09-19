function overlayOn() {
    document.getElementById('overlay').style.display = 'block';
};

function overlayOff() {
    document.getElementById('overlay').style.display = 'none';
};

document.querySelector('.settings-button').addEventListener('click', function(e) {
    overlayOn();
    e.stopPropagation();
});

document.querySelector('.settings-overlay').addEventListener('click', function(e) {
    e.stopPropagation();
})

document.getElementById('page').addEventListener('click', function() {
    overlayOff();
});