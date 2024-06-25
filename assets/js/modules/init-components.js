// import feather from 'feather-icons';

export function initComponents() {
    // Feather Icons
    feather.replace();

    // Back To Top
    const mybutton = document.querySelector('[data-toggle="back-to-top"]');

    window.addEventListener('scroll', function () {
        if (window.pageYOffset > 72) {
            mybutton.classList.add('flex');
            mybutton.classList.remove('hidden');
        } else {
            mybutton.classList.remove('flex');
            mybutton.classList.add('hidden');
        }
    });

    mybutton.addEventListener('click', function (e) {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}
