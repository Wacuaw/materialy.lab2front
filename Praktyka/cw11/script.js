window.onload = function f() {

    var nowyElement = document.createElement('li');
    var nowyWezelTekstowy = document.createTextNode('Element Trzy');

    nowyElement.appendChild(nowyWezelTekstowy);
    document.getElementById('lista').appendChild(nowyElement);

    var element1 = document.getElementById('element1');
    var elementNadrzedny = document.getElementById('lista');
    elementNadrzedny.removeChild(element1);

document.getElementById('do ukrycia').setAttribute('hidden', true);
document.getElementById('ukryty').removeAttribute('hidden');


};

