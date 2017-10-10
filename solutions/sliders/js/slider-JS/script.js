var item = document.getElementsByClassName('slider__item');
for (var i = 0; i<item.length; i++) {
	item[i].style.position = 'relative';
	var span = document.createElement('span');
	span.style.cssText = 'position:absolute; left:0; top:0;';
	span.innerHTML = 1;
	item[i].appendChild(span)
}

var width = 1024;
var count = 1;

var slider = document.getElementById('slider');
var list = slider.querySelector('.slider__list');
var listElements = slider.querySelectorAll('.slider__item');

var position = 0;

slider.querySelector('.btn_prev').onclick = function() {
	position = Math.min(position + width * count, 0);
	list.style.marginLeft = position + 'px';
};

slider.querySelector('.btn_next').onclick = function() {
	position = Math.max(position - width * count, -width * (listElements.length - count));
	list.style.marginLeft = position + 'px';
};