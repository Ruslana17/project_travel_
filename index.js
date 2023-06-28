const loginPopup = document.querySelector('.button_login');
const popup = document.querySelector('.login_popup');
const searchInput = document.querySelector('.start_search_planning');

loginPopup.addEventListener('click', () => {
    popup.classList.toggle('flex')
    searchInput.classList.toggle('hidden')
})

popup.addEventListener('click', (event)=>{
  if(event.target.classList.contains('login_popup', 'flex',)){
        popup.classList.toggle('display_none') 
        searchInput.classList.toggle('visible')
    }
  /*console.log(event)*/
})