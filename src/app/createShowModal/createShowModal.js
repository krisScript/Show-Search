import getData from '../getData/getData';
import displayAlert from '../displayAlert/displayAlert';
import addImgsToCarousel from '../addImgsToCarousel/addImgsToCarousel';
import countdown from '../countdown/countdown';
const createShowModal = showId => {
  const url = `https://www.episodate.com/api/show-details?q=${showId}`;
  getData(url)
    .then(data => {
      const { tvShow } = data;
      const showModal = document.createElement('div');
      showModal.className = 'modal is-active';
      showModal.innerHTML = `<div class="modal-background"></div>
  <div class="modal-card">
    <header class="modal-card-head">
      <p class="modal-card-title">${tvShow.name}</p>
      <button class="button is-primary" id="delete-btn">X</button>
    </header>
    <section class="modal-card-body">
    <div class="card ">
    <div class="card-image">
      <figure class="image is-4by5
      ">
        <img  src="${tvShow.image_path}" alt="${tvShow.name}">
       </figure>
    </div>
    <div class="card-content">
      <div class="media">
      <div class="media-content">
          <p class="title is-size-3">${tvShow.name}</p>
          <p class="title is-size-5">${tvShow.network}</p>
        </div>
      </div>
      <div class="content">
         <p>${tvShow.description}</p>
     </div>
   
     <div class="is-divider" data-content="Info"></div>
     <div class="content has-text-centered">
         <p>Status: ${tvShow.status}</p>
         <p>Network: ${tvShow.network}</p>
         <p>Start Date: ${tvShow.start_date}</p>
         <p>Rating: ${Number.parseFloat(tvShow.rating).toFixed(2)} from ${
        tvShow.rating_count
      }</p>
     </div>
     ${
       tvShow.countdown
         ? `<div class="is-divider" data-content="Countdown"></div>
     <div class="content has-text-centered">
     <time id="show-countdown"></time>
     </div>`
         : ''
     }
  
     ${
       tvShow.pictures.length > 0
         ? `<div class="is-divider" data-content="Images"></div><div class='carousel carousel-animated carousel-animate-fade'>
     <div class='carousel-container'>
     </div>
     <div class="carousel-navigation">
       <div class="carousel-nav-left">
         <i class="fa fa-chevron-left" aria-hidden="true"></i>
       </div>
       <div class="carousel-nav-right">
         <i class="fa fa-chevron-right" aria-hidden="true"></i>
       </div>
     </div>
     </div>`
         : ''
     }
  
     </div>
    
    </div>
    </div>
    </div>
  </div>
  `;
      const body = document.body;
      body.appendChild(showModal);
      if (tvShow.pictures.length > 0) {
        addImgsToCarousel(tvShow.pictures);
      }
      let dateInterval;
      if (tvShow.countdown) {
        dateInterval = setInterval(() => {
          const date = new Date(tvShow.countdown.air_date);
          const showCountdown = document.querySelector('#show-countdown');
          const countdownDate = countdown(date);
          showCountdown.textContent = `${countdownDate.days} days : ${
            countdownDate.hours
          } hours: ${countdownDate.minutes} minutes : ${
            countdownDate.seconds
          } seconds`;
        }, 1000);
      }
      const deleteBtn = document.querySelector('#delete-btn');
      deleteBtn.addEventListener('click', e => {
        clearInterval(dateInterval);
        showModal.remove();
      });
    })
    .catch(error => {
      displayAlert('Sorry there was an error?');
    });
};
export default createShowModal;
