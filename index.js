/* popup menu for web*/ 
const loginPopup = document.querySelector('.button_login');
const popup = document.querySelector('.login_popup');
const searchInput = document.querySelector('.start_search_planning');

loginPopup.addEventListener('click', () => {
    popup.classList.toggle('flex')
    searchInput.classList.toggle('hidden')
})

popup.addEventListener('click', (event)=>{
  if(event.target.classList.contains('login_popup')){
        popup.classList.toggle('flex') 
        searchInput.classList.toggle('hidden')
    }
})


/* slider contraries*/ 

const slider= document.querySelector('.destinations_images'); /* div with images*/ 
const findMore= document.getElementById('button_find_more'); /* button find more */

const destinationSpain = document.querySelector('.destinations_images_spain'); 
const destinationJapan = document.querySelector('.destinations_images_japan');
const destinationUsa = document.querySelector('.destinations_images_usa');

const sliders = [destinationSpain, destinationJapan, destinationUsa]; /* массив дивов */
const slidersCount = sliders.length;


let sliderIndex = 1;

findMore.addEventListener('click', showNextSlide);

/* function next slider*/

function showNextSlide() {
    sliderIndex = (sliderIndex + 1) % slidersCount;
    updateSlider();
  }


  function updateSlider() {
    sliders.forEach((slide, index) => {
      if (index === sliderIndex) {
        slide.style.visibility = 'visible'; 
      } else {
        slide.style.visibility = 'hidden';
      }
    });
  }