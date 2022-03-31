var slider = document.getElementById("myRange");
var output = document.getElementById("displayValue");
var minutes = Math.floor(slider.value / 60);
var seconds = slider.value % 60;
var secondOutput = $("#seconds")[0];
var minuteOutput = $("#minutes")[0];
var minutes = Math.floor(slider.value / 60);
var seconds = slider.value % 60;
minuteOutput.innerHTML = minutes;
secondOutput.innerHTML = seconds

$('.slider').change(function() {
        var minutes = Math.floor(slider.value / 60);
        var seconds = slider.value % 60;
        minuteOutput.innerHTML = minutes;
        secondOutput.innerHTML = seconds
});

