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
const blockslide= document.querySelector('.destinations_images_slider') /* div slider not visible */  
const findMore= document.getElementById('button_find_more'); /* button find more */








const slides=document.querySelectorAll('#sliderBlock');

console.log(slides);

let sliderr=[];

for( let i=0; i< slides.length; i++){
  sliderr[i] = slides[i].src;
  slides[i]= remove();

}
console.log(sliderr)





/*let offset=0; // смещение от левого края для дивов вариант

findMore.addEventListener('click', function(){
offset+= 45;
if (offset>140){
  offset=0;
}
blockslide.style.left=-offset+ 'vw';
});
*/











/*let sliderIndex = 1;

findMore.addEventListener('click', showNextSlide);



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
  }*/