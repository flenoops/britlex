document.getElementById('burgerBtn').onclick = function () {
    document.getElementById('mobileMenu').classList.add('is-open');
};
document.getElementById('closeBtn').onclick = function () {
    document.getElementById('mobileMenu').classList.remove('is-open');
};