function init() {
    var adultsPlus = document.getElementsByClassName("search-form__adults-plus")[0];
    var adultsMinus = document.getElementsByClassName("search-form__adults-minus")[0];
    var kidsPlus = document.getElementsByClassName("search-form__kids-plus")[0];
    var kidsMinus = document.getElementsByClassName("search-form__kids-minus")[0];

    var adultsInput = document.getElementById("adults");
    var kidsInput = document.getElementById("kids");

    adultsPlus.addEventListener('click', function () {adultsInput.value = Number(adultsInput.value) + 1;}, false );
    adultsMinus.addEventListener('click',
        function () {
        if(Number(adultsInput.value) >= 1) {
        adultsInput.value = Number(adultsInput.value) - 1;
        }
    }, false );

    kidsPlus.addEventListener('click', function () {kidsInput.value = Number(kidsInput.value) + 1;}, false );
    kidsMinus.addEventListener('click',
        function () {
        if(Number(kidsInput.value) >= 1) {
            kidsInput.value = Number(kidsInput.value) - 1;
        }
    }, false );

}

window.addEventListener ('load', init, false);