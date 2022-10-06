var swiper = new Swiper(".mySwiper", {
  slidesPerView: 4,
  spaceBetween: 70,
  slidesPerGroup: 4,
  loop: true,
  loopFillGroupWithBlank: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

const navLink = document.querySelectorAll(".nav-link");

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}



var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btne = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btne.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


   const validateEmail = (email) => {
       return email.match(
         /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                                    );
     };
    
    const validate = (selector) => {
    const result = document.querySelector('#result');
    const email = document.querySelector('#' + selector).value;
    result.textContent = "";
   
     if (validateEmail(email)) {
        result.textContent = email + ' is valid :)'
                                      result.style.color = 'green';
     } else {
         result.textContent = email + ' is not valid :('
                                      result.style.color = '#E77C40';
     }
    return false;
  }

  const passwordField = document.querySelector("#password");
  const eyeIcon= document.querySelector("#eye");

  eye.addEventListener("click", function(){
    this.classList.toggle("fa-eye-slash");
    const type = passwordField.getAttribute("type") === "password" ? "text" : "password";
    passwordField.setAttribute("type", type);
  })


  // Get the modal
var madal = document.getElementById("MyModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtN");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("Close")[0];
 

// When the user clicks the button, open the modal 
btn.onclick = function() {
  madal.style.display = "block";
   
}
 
 
// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  madal.style.display = "none";
 
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == madal) {
    madal.style.display = "none";
  }
}

 

  // const counters = document.querySelectorAll(".count");
  // const speed = 300;
  
  // counters.forEach((counter) => {
  // const updateCount = () => {
  //   const target = parseInt(+counter.getAttribute("data-target"));
  //   const count = parseInt(+counter.innerText);
  //   const increment = Math.trunc(target / speed);
  //   console.log(increment);
  
  //   if (count < target) {
  //     counter.innerText = count + increment;
  //     setTimeout(updateCount, 1);
  //   } else {
  //     count.innerText = target;
  //   }
  // };
  // updateCount();
  // });
 
//   const bars = document.getElementById('bars');
//   const mobileMenu = document.getElementById('mobileMenu');
//   bars.addEventListener('click', function() {
//     mobileMenu.classList.toggle('active')
//   })


//   const validateEmail = (email) => {
//     return email.match(
//       /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
//     );
//   };
  
// const validate = (selector) => {
//   const result = document.querySelector('#result');
//   const email = document.querySelector('#' + selector).value;
//   result.textContent = "";

//   if (validateEmail(email)) {
//       result.textContent = email + ' is valid :)'
//       result.style.color = 'green';
//   } else {
//       result.textContent = email + ' is not valid :('
//       result.style.color = '#E77C40';
//   }
//   return false;
// }