const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");


// Mobile menu

menuBtn.addEventListener("click", function () {

    navLinks.classList.toggle("active");

});


// Close mobile menu when clicking a link

const links = document.querySelectorAll(".nav-links a");

links.forEach(function (link) {

    link.addEventListener("click", function () {

        navLinks.classList.remove("active");

    });

});


// Video placeholder handling

const videos = document.querySelectorAll("video");

videos.forEach(function (video) {

    const placeholder =
        video.parentElement.querySelector(".video-placeholder");


    video.addEventListener("loadeddata", function () {

        if (placeholder) {

            placeholder.style.display = "none";

        }

    });


    video.addEventListener("error", function () {

        if (placeholder) {

            placeholder.style.display = "grid";

        }

    });

});