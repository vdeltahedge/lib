
var width = 100; 
var count = 1;

var slider = document.getElementById('reviews');
var list = slider.querySelector('.reviews__list');
var listElements = slider.querySelectorAll('.reviews-item');

var position = 0;

slider.querySelector('.reviews__btn_prev').onclick = function() {
	position = Math.min(position + width * count, 0);
	list.style.marginLeft = position + '%';
};

slider.querySelector('.reviews__btn_next').onclick = function() {
	position = Math.max(position - width * count, -width * (listElements.length - count));
	list.style.marginLeft = position + '%';
};

//--------------------------------------------------------------------//

// просто запрашиваем DOM... будто просим разрешение у босса!
var links = document.querySelectorAll('.switches__btn');
var container = document.querySelector('.reviews__list');

// activeLink обеспечивает метку для активного элемента
var activeLink = 0;

// устанавливаем отслеживание событий
for (var i = 0; i < links.length; i++) {
    var link = links[i];
    link.addEventListener('click', setClickedItem, false);

    // определяем элемент для activeLink
    link.itemID = i;
}

// устанавливаем первый элемент в качестве активного
links[activeLink].classList.add('switches__btn_active');

function setClickedItem(e) {
    removeActiveLinks();

    var clickedLink = e.target;
    activeLink = clickedLink.itemID;

    changePosition(clickedLink);
}

function removeActiveLinks() {
    for (var i = 0; i < links.length; i++) {
        links[i].classList.remove('switches__btn_active');
    }
}

// Обработчик изменяет позицию слайдера, после того, как мы убедились,
// что в качестве активной обозначена нужная нам ссылка.
function changePosition(link) {
    link.classList.add('switches__btn_active');

    var position = link.getAttribute('data-pos');
    container.style.left = position;
}
