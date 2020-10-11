
  function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
}
  function changeSize() {
    $(document).ready(function () {
    var size = getRndInteger(20,70);
    var display = document.getElementById( "display");
    display.innerHTML = "❤️";
    var yeah = display.style.fontSize =  size + "px";
  
    }
    )
    }    
    
  function changeFontColor(color) {
    var demo = "This is what the new color looks like!";
    var color_change = demo.fontcolor(color)
    document.getElementById("text").innerHTML = color_change;
}
