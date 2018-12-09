window.onload = function () {
    var naglowek = document.getElementById('naglowek');

    console.log(naglowek);
    var naglowek1 = document.querySelector('h1');
    console.log(naglowek1);
    var paragrafy = document.getElementsByClassName('paragraf');
    console.log(paragrafy);

    var paragrafy1 = document.get.getElementsByClassName('h1');
    console.log(paragrafy1);

    var paragrafy2 = document.querySelectorAll(' .paragraf');
    console.log(paragrafy2);

    var drugiParagraf = document.getElementsByClassName('paragraf')[0];
    console.log(drugiParagraf);

    document.getElementById('naglowek').textContent = 'zmienna wartość';
    document.getElementById('naglowek2').innerHTML = '<i> NAgłówek kursywą</i>;
}


/*tutaj jest blad i nie dziala*/
