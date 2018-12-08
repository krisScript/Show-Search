import bulmaCarousel from 'bulma-carousel';
const addImgsToCarousel = imgsArr => {
  const imgContainer = document.querySelector('.carousel-container');
  imgsArr.forEach(img => {
    const carouselItem = document.createElement('div');
    carouselItem.className = 'carousel-item has-background';
    carouselItem.innerHTML = `
      <img class="is-background" src="${img}" alt="" width="640" height="310" />

    `;
    imgContainer.appendChild(carouselItem);
  });
  const carousels = bulmaCarousel.attach();
};
export default addImgsToCarousel;
