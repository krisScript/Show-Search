import getData from '../getData/getData';
import createShowCard from '../createShowCard/createShowCard';
import classToggle from '../classToggle/classToggle';
const searchForShow = () => {
  const searchForm = document.querySelector('#search-form');
  searchForm.addEventListener('submit', e => {
    e.preventDefault();
    const title = e.target.elements.title.value;
    const url = `https://www.episodate.com/api/search?q=${title}&page=1`;
    const submitBtn = document.querySelector('#submit-btn');
    classToggle(submitBtn, 'is-loading');
    getData(url).then(data => {
      const searchResultsContainer = document.querySelector(
        '#search-results-container'
      );
      const searchResultsSection = document.querySelector(
        '#search-results-section'
      );
      const { tv_shows } = data;
      searchResultsSection.classList.remove('is-hidden');
      if (searchResultsContainer.children) {
        Array.from(searchResultsContainer.children).forEach(child =>
          child.remove()
        );
      }
      tv_shows.forEach(show => {
        searchResultsContainer.appendChild(createShowCard(show));
      });
      classToggle(submitBtn, 'is-loading');
    });
  });
};
export default searchForShow;
