var index = 0;
var totalImg = ["1.png", "2.png", "3.png", "4.png", "5.jpeg"]

function next() {
    if (index == 4) {
        index = 0;
    }
    else {
        index++;
    }

    var img = document.getElementById("image");
    img.src = totalImg[index];
}

function prev() {
    if (index == 0) {
        index = 4;
    }
    else {
        index--;
    }

    var img = document.getElementById("image");
    img.src = totalImg[index];
}