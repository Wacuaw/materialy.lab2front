var numberOfSomething = 1;


function parzysteNieparzyste(liczba) {


    if ((liczba % 2) == 0) {
        console.log('liczba ' + liczba + ' jest parzysta')
    } else {
        console.log('liczba ' + liczba + ' jest nieparzysta')
    }
}

parzysteNieparzyste(numberOfSomething);

for (var i = 1; i < 50; i++) {

    if (i < 10) {
        console.log(i)
    }
    else if (i < 20) {
        if ((i % 2) != 0) {
            console.log(i)
        }
    } else if (i < 30) {
        if (i % 2!= 0) {
            console.log(i)
        } else if (i < 40) {
            if (i%3!= 0) {
                console.log(i)
        } else {
            console.log(i*2)}
        }

    }
};