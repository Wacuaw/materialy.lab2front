function prostaFunkcja(){
    console.log('wywołanie funkcji')

}



prostaFunkcja();


function prostaFunkcja2(param1, param2){

    console.log('wywołanie funkcji dla parametrów ' + param1 + ' ' + param2)
}

prostaFunkcja2('jeden', 'dwa');

function sum(liczbaPierwsza, liczbaDruga) {
/*
    var wynik = liczbaPierwsza+liczbaDruga;
*/
    return liczbaPierwsza+liczbaDruga;
}

console.log('wynik sumowania  ' +sum(4,6));
