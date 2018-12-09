window.onload = function () {
    var input = document.getElementsByClassName('textInput')[0];

    input.addEventListener('focus', function () {
        this.style.border = '3px solid lightgrey'
    });

    input.addEventListener('blur', function () {
        this.style.border = '1px solid lightgrey'

    });

/*to pogrubia i pocienia z powrotem ramke do wpisywania*/

    input.addEventListener('keyup', function () {
        var text = this.value;
        document.getElementsByClassName('writtenText')[0].textContent = text;

    })

    document.getElementsByClassName('listOfItems')[0].addEventListener('click',function (e) {
        if(e.target.className.includes('item')){
            this.removeChild(e.target);
        }
/*to wypisuje w "written text" to co piszemy w okienku*/
    })

    document.getElementById('addItem').addEventListener('click',
        function () {
        var input = document.getElementsByClassName('textInput')[0];
        var text = input.value;

        var newElement = document.createElement('li');
        var newTextNode = document.createTextNode(text);
        newElement.appendChild(newTextNode);
        newElement.classList.add('item');

        document.getElementsByClassName('listOfItems')[0].appendChild(newElement);
            input.value = '';

        });
/*to tworzy nam nowe okienko po wpisaniu wartosci i kliknieciu add*/

    var clickCtn = 0;
    document.addEventListener('click', function () {
        document.getElementsByClassName('clickCtn')[0].textContent = ++clickCtn;
    })

    var dblClickCtn = 0;

    document.addEventListener('dblclick', function () {
        document.getElementsByClassName('dblClickCtn')[0].textContent = ++dblClickCtn;

    })


    var keyDownCtn = 0;

    document.addEventListener('keydown', function () {
        document.getElementsByClassName('keyDownCtn')[0].textContent = ++keyDownCtn;

    })

}