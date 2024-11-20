const dropdownItem1 = document.querySelector('.dropdown1');
const dropdownItem2 = document.querySelector('.dropdown2');

function dropdown1() {
    dropdownItem1.addEventListener('click', function () {
        alert('Google Translate')
    })
}

dropdown1()

function dropdown2() {
    dropdownItem2.addEventListener('click', function () {
        alert('Google Translate')
    })
}

dropdown2()