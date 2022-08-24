const red = document.querySelector(".red");
const cyan = document.querySelector(".cyan");
const violet = document.querySelector(".violet");
const orange = document.querySelector(".orange");
const pink = document.querySelector(".pink");
const center = document.querySelector(".center");

const getBGColor = function(selectedElement){
  return window.getComputedStyle(selectedElement).backgroundColor;
}

const magicColorChanger = function (element, color) {
return element.addEventListener("mouseenter", function() {
  center.style.background = color;
})
}

magicColorChanger(red , getBGColor(red));
magicColorChanger(cyan , getBGColor(cyan));
magicColorChanger(violet , getBGColor(violet));
magicColorChanger(orange , getBGColor(orange));
magicColorChanger(pink , getBGColor(pink));