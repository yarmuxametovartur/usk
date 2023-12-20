const button = document.querySelector('#nav-call-btn');
const modalWindow = document.querySelector('#modal');
const modalWindowCloseButton = document.querySelector('#close');

button.addEventListener('click', function () {
    modalWindow.classList.add('modal-window_active');
    $("body").css("overflow-y","hidden");
});
modalWindowCloseButton.addEventListener('click', function () {
    modalWindow.classList.remove('modal-window_active');
    $("body").css("overflow-y","scroll");
});