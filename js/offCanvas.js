function openCanvas() {
    document.querySelector('.offcanvas-btn').classList.toggle('offcanvas-btn-open');
    document.querySelector('.offcanvas-aside').classList.toggle('offcanvas-aside-open');
}

function hideCanvas() {
    $('.offcanvas-btn').hide()
}

function showCanvas() {
    $('.offcanvas-btn').show()
}