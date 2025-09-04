$(document).ready(function(){
  $('.autoplay').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    pauseOnHover: false,
    pauseOnFocus: false,
    autoplaySpeed: 0,
    speed: 6000,
    cssEase: 'linear',
    responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 3
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }
  ]
  });
});

let counters = document.querySelectorAll(".counter");

function runCounter(counter) {
  let target = parseInt(counter.innerText);
  let i = 0;
  let interval = setInterval(() => {
    counter.innerText = i + "%";
    i++;
    if (i > target) {
      clearInterval(interval);
    }
  }, 20);
}
let observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      runCounter(entry.target);   
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 }); 

counters.forEach(counter => {
  observer.observe(counter);
});


let discover = document.querySelector(".discover")
let dropdown = document.querySelector(".dropdown")
let discoverHover = document.querySelector(".discoverHover")
let icon = document.querySelector(".icon")

discover.addEventListener("mouseenter", () => {
  dropdown.style.opacity = "1"
  icon.innerHTML = `<i class="fa-solid fa-angle-up"></i>`
})
discoverHover.addEventListener("mouseleave", () => {
  dropdown.style.opacity = "0"
  icon.innerHTML = `<i class="fa-solid fa-angle-down"></i>`
})



const images = document.querySelectorAll(".features img");
let index = 0;

setInterval(() => {
  images.forEach(img => img.classList.remove("active"));


  images[index].classList.add("active");

  index = (index + 1) % images.length;
}, 1000);


const card = document.getElementById('myCard');
card.addEventListener('click', () => {
  card.classList.toggle('clicked');
});
