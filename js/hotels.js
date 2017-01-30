function init () {
    // range slider
    var minValue = document.querySelector("#price-min");
    var maxValue = document.querySelector("#price-max");

    minValue.addEventListener ('keydown', function (event) {
        if(event.keyCode === 13) {
        var valueString = minValue.value + "," + maxValue.value;
        $('.range-slider').jRange('setValue', valueString);
        }
    }, false);

    maxValue.addEventListener ('keydown', function (event) {
        if(event.keyCode === 13) {
            var valueString = minValue.value + "," + maxValue.value;
            $('.range-slider').jRange('setValue', valueString);
        }
    }, false);
    $('.range-slider').jRange({
        from: 1000,
        to: 200000,
        step: 500,
        showLabels : false,
        showScale : false,
        width : "100%",
        theme : 'theme-blue',
        scale: [1,25,50,75,100],
        isRange : true,
        onstatechange: function () {

            var values = this.getValue().split(',');
            minValue.value = Number(values[0]);
            maxValue.value = Number(values[1]);
        }
    });


}

window.addEventListener('load', init, false);