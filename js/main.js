let next = document.querySelector(".next")
let prev = document.querySelector(".prev")
let two = document.querySelector(".two")
let firstSp = document.querySelector(".firstSp")
let three = document.querySelector(".three")
let secSp = document.querySelector(".secSp")
let thirdSp = document.querySelector(".thirdSp")
let four = document.querySelector(".four")
let one = document.querySelector(".one")
counter = 1
next.onclick = function () {
    prev.classList.remove("disable");
    if (counter == 1) {
        counter++
        firstSp.classList.add("activeSPA");
        two.classList.add("activeNUM");
        return;
    }
    if (counter == 2) {
        counter++
        secSp.classList.add("activeSPA");
        three.classList.add("activeNUM");
        return;
    }
    if (counter == 3) {
        counter++
        thirdSp.classList.add("activeSPA");
        four.classList.add("activeNUM");
        next.classList.add("disable");
        return;
    }
}
prev.onclick = function () {
    if (counter == 4) {
        counter--
        thirdSp.classList.remove("activeSPA");
        four.classList.remove("activeNUM");
        return
    }
    if (counter == 3) {
        counter--
        secSp.classList.remove("activeSPA");
        three.classList.remove("activeNUM");
        return;
    }
    if (counter == 2) {
        firstSp.classList.remove("activeSPA");
        two.classList.remove("activeNUM");
        next.classList.remove("disable");
        prev.classList.add("disable");
        counter = 1
        return;

    }
}
