// =====================================
// WEDDING INVITATION V1.0
// =====================================

const openButton = document.getElementById("openInvitation");
const cover = document.getElementById("cover");
const home = document.getElementById("home");
const music = document.getElementById("bgMusic");
const musicBtn = document.getElementById("musicBtn");

// Cek apakah elemen ditemukan
console.log(openButton);
console.log(cover);
console.log(home);

// Event klik tombol
openButton.addEventListener("click", function () {

    // Mulai musik
    music.play();

    // Animasi cover
    cover.classList.add("fade-out");

    setTimeout(() => {

        cover.style.display = "none";

        home.style.display = "block";

        // Paksa browser render dulu
        requestAnimationFrame(() => {
            home.classList.add("fade-in");
        });

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

        musicBtn.style.display = "block";

    }, 800);
    startFlowers();

});
// ===============================
// COUNTDOWN
// ===============================

const weddingDate = new Date("2026-07-25T08:00:00").getTime();

const countdown = setInterval(function(){

    const now = new Date().getTime();

    const distance = weddingDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));

    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").innerHTML = days;

    document.getElementById("hours").innerHTML = hours;

    document.getElementById("minutes").innerHTML = minutes;

    document.getElementById("seconds").innerHTML = seconds;

    if(distance < 0){

        clearInterval(countdown);

        document.querySelector(".count-box").innerHTML =
        "<h2>🎉 Acara Sedang Berlangsung 🎉</h2>";

    }

},1000);
musicBtn.addEventListener("click", function () {

    if (music.paused) {

        music.play();

        musicBtn.innerHTML = "🔊";

    } else {

        music.pause();

        musicBtn.innerHTML = "🔇";

    }

});
// =========================
// Floating Flowers
// =========================

const flowerContainer = document.getElementById("flower-container");

function createFlower() {

    const flower = document.createElement("img");

    flower.src = "img/flower.png";

    flower.classList.add("flower");

    flower.style.left = Math.random() * window.innerWidth + "px";

    flower.style.width = (18 + Math.random() * 18) + "px";

    flower.style.animationDuration = (8 + Math.random() * 5) + "s";

    flower.style.opacity = 0.25 + Math.random() * 0.75;

    flower.style.filter =
    `blur(${Math.random()*1.2}px)`;

    flowerContainer.appendChild(flower);

    flower.addEventListener("animationend", () => {
        flower.remove();
    });

}

let flowerInterval;

function startFlowers() {
    flowerInterval = setInterval(createFlower, 1500);
}
// ==========================
// LIGHTBOX
// ==========================

const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const galleryImages = document.querySelectorAll(".gallery-feature img, .gallery-grid img");

galleryImages.forEach(img => {

    img.addEventListener("click", function(){

        lightbox.style.display = "flex";

        lightboxImg.src = this.src;

    });
 

});

document.querySelector(".close").addEventListener("click",()=>{

    lightbox.style.display="none";

});

lightbox.addEventListener("click",(e)=>{

    if(e.target===lightbox){

        lightbox.style.display="none";

    }

});
// ==========================
// Nama Tamu dari URL
// ==========================

const params = new URLSearchParams(window.location.search);

const guest = params.get("to");

if (guest) {

    document.getElementById("guestName").textContent =
        decodeURIComponent(guest);

}