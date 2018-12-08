import createShowModal from '../createShowModal/createShowModal';
const createShowCard = show => {
  const showCard = document.createElement('div');
  showCard.className = 'column is-one-fifth is-flex';
  showCard.innerHTML = `
  <div class="container">
<div class="card ">
<div class="card-image">
  <figure class="image is-3by4
  ">
    <img  src="${show.image_thumbnail_path}" alt="${show.name}">
   </figure>
</div>
<div class="card-content">
  <div class="media">
  <div class="media-content">
      <p class="title is-size-6">${show.name}</p>
    </div>
  </div>
  <div class="content">
      <p>Network: ${show.network}</p>
      <p>Start Date: ${show.start_date}</p>
      <p>Status: ${show.status}</p>
    </div>
</div>
</div>
</div>
</div>
  `;
  showCard.addEventListener('click', e => {
    createShowModal(show.id);
  });
  return showCard;
};
export default createShowCard;
