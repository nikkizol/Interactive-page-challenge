// slider
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    const slides = document.getElementsByClassName("mySlides");
    const dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
}

// countdown
let days = 2; //starting number of days
let hours = 0; // starting number of hours
let minutes = 2; // starting number of minutes
let seconds = 5; // starting number of seconds

// converts all to seconds
let totalSeconds =
    days * 60 * 60 * 24 + hours * 60 * 60 + minutes * 60 + seconds;

//temporary seconds holder
let tempSeconds = totalSeconds;

// calculates number of days, hours, minutes and seconds from a given number of seconds
const convert = (value, inSeconds) => {
    if (value > inSeconds) {
        let x = value % inSeconds;
        tempSeconds = x;
        return (value - x) / inSeconds;
    } else {
        return 0;
    }
};

//sets seconds
const setSeconds = (s) => {
    document.querySelector("#seconds").textContent = s + "s";
};

//sets minutes
const setMinutes = (m) => {
    document.querySelector("#minutes").textContent = m + "m";
};

//sets hours
const setHours = (h) => {
    document.querySelector("#hours").textContent = h + "h";
};

//sets Days
const setDays = (d) => {
    document.querySelector("#days").textContent = d + "d";
};

// Update the count down every 1 second
const x = setInterval(() => {
//clears countdown when all seconds are counted
    if (totalSeconds <= 0) {
        clearInterval(x);
    }
    setDays(convert(tempSeconds, 24 * 60 * 60));
    setHours(convert(tempSeconds, 60 * 60));
    setMinutes(convert(tempSeconds, 60));
    setSeconds(tempSeconds === 60 ? 59 : tempSeconds);
    totalSeconds--;
    tempSeconds = totalSeconds;
}, 1000);

// Cards
function openPage(pageName,elmnt,color) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].style.backgroundColor = "";
    }
    document.getElementById(pageName).style.display = "block";
    elmnt.style.backgroundColor = color;
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();