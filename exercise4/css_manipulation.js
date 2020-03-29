function modify() {
    var sentence = document.getElementById("sentence");
    var border_red = document.getElementById("border_red");
    var border_green = document.getElementById("border_green");
    var border_blue = document.getElementById("border_blue");
    var border_width = document.getElementById("border_width");
    var background_red = document.getElementById("background_red");
    var background_green = document.getElementById("background_green");
    var background_blue = document.getElementById("background_blue");

    sentence.style.borderColor = "#" + border_red.value + border_green.value + border_blue.value;
    sentence.style.borderWidth = border_width.value + "px";
    sentence.style.backgroundColor = "#" + background_red.value + background_green.value + background_blue.value;
}