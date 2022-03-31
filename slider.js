document.getElementById("myRange").oninput = function() {
    var value = (this.value-this.min)/(this.max-this.min)*100
    this.style.background = 'linear-gradient(to right, aqua 0%, aqua ' + value + '%, #fff ' + value + '%, white 100%)'
};

document.getElementById("volumeRange").oninput = function() {
    var value = (this.value-this.min)/(this.max-this.min)*100
    this.style.background = 'linear-gradient(to right, aqua 0%, aqua ' + value + '%, #fff ' + value + '%, white 100%)'
};