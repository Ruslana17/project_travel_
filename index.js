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


const blockslide= document.querySelector('.destinations_images_slider') /* div slider not visible */  
const findMore= document.getElementById('button_find_more'); /* button find more */


const slides=document.querySelectorAll('.image_slider');


console.log(slides);

let slider=[];

for( let i=0; i< slides.length; i++){
  slider[i] = slides[i].src;
  slides[i].remove();
}
/*console.log(sliderr)*/


let step= 0;
let offset= 0;

function draw(){
  let img = document.createElement('img');
  img.src = slider[step];
  img.classList.add('image_slider');
  img.style.left=offset*5 +'vw';
  img.style.width=50+'vw';
  img.style.borderRadius= 2+ 'vw';
  document.querySelector('.destinations_images_slider').appendChild(img);
 
if( step+1 == slider.length){
  step = 0;
} 
else{
  step++;
}
  offset = 0;

}
draw(); draw(); draw();

function left(){
  let slides2= document.querySelectorAll('.image_slider');
  let offset2 =0;
  for(let i=0; i<slides2.length; i++){
    slides2[i].style.left =offset2*5-6 +'vw';
    offset2++;
  }
  setTimeout(function(){
  slides2[0].remove();
  draw();
  }, 1000);
}



findMore.addEventListener('click', left);

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