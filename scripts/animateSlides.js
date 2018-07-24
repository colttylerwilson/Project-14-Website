var myIndex = 0;
cratingCarousel();
corrugatedCarousel();
militaryCarousel();
designCarousel();

function cratingCarousel() {
    var i;
    var x = document.getElementsByClassName("cratingSlides");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    myIndex++;
    if (myIndex > x.length) { myIndex = 1 }
    x[myIndex - 1].style.display = "block";
    setTimeout(cratingCarousel, 5000);
}

function corrugatedCarousel() {
    var i;
    var x = document.getElementsByClassName("corrugatedSlides");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    myIndex++;
    if (myIndex > x.length) { myIndex = 1 }
    x[myIndex - 1].style.display = "block";
    setTimeout(corrugatedCarousel, 5000);
}

function militaryCarousel() {
    var i;
    var x = document.getElementsByClassName("militarySlides");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    myIndex++;
    if (myIndex > x.length) { myIndex = 1 }
    x[myIndex - 1].style.display = "block";
    setTimeout(militaryCarousel, 5000);
}

function designCarousel() {
    var i;
    var x = document.getElementsByClassName("designSlides");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    myIndex++;
    if (myIndex > x.length) { myIndex = 1 }
    x[myIndex - 1].style.display = "block";
    setTimeout(militaryCarousel, 5000);
}