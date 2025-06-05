

let shareBtn1 = document.getElementById('share-btn1');
shareBtn1.addEventListener('click', () => {
    let screenSize = window.matchMedia("(max-width: 567px)");

    if (screenSize.matches) {
        document.getElementById('author').classList.remove('d-flex');
        document.getElementById('author').classList.add('d-none');
        document.getElementById('author-social-small').classList.remove('d-none');
        document.getElementById('author-social-small').classList.add('d-flex');

        document.getElementById('article-content').classList.add('mb-3');
        document.getElementById('article-content').classList.remove('mb-5');
    } else {
        if (document.getElementById('author-social-big').classList.contains('d-flex') === true) {
            document.getElementById('author-social-big').classList.remove('d-flex');
            document.getElementById('author-social-big').classList.add('d-none');
        } else {
            document.getElementById('author-social-big').classList.remove('d-none');
            document.getElementById('author-social-big').classList.add('d-flex');
        }

    }

});

let shareBtn2 = document.getElementById('share-btn2');
shareBtn2.addEventListener('click', () => {
    let screenSize = window.matchMedia("(max-width: 567px)");

    if (screenSize.matches) {
        document.getElementById('author-social-small').classList.remove('d-flex');
        document.getElementById('author-social-small').classList.add('d-none');
        document.getElementById('author').classList.remove('d-none');
        document.getElementById('author').classList.add('d-flex');

        document.getElementById('article-content').classList.add('mb-5');
        document.getElementById('article-content').classList.remove('mb-3');
    }

});