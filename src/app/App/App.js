import getData from '../getData/getData';
import displayAlert from '../displayAlert/displayAlert';
import createShowCard from '../createShowCard/createShowCard';
import classToggle from '../classToggle/classToggle';

class App {
  constructor() {
    this.page = 1;
    this.maxPages;
    this.showsContainer = document.querySelector('#show-cards-container');
    this.loadMoreBtn = document.querySelector('#load-more-btn');
    this.classToggle = classToggle;
    this.getData = getData;
    this.displayAlert = displayAlert;
    this.createShowCard = createShowCard;
  }
  incrementPage() {
    this.page++;
  }
  appendToContainer(showsArr) {
    showsArr.forEach(show => {
      this.showsContainer.appendChild(this.createShowCard(show));
    });
  }
  getShows() {
    this.classToggle(this.loadMoreBtn, 'is-loading');
    const url = `https://www.episodate.com/api/most-popular?page=${this.page}`;
    this.getData(url)
      .then(data => {
        this.maxPages = data.pages;
        this.incrementPage();
        const shows = data.tv_shows;
        this.appendToContainer(shows);
        this.classToggle(this.loadMoreBtn, 'is-loading');
      })
      .catch(error => {
        displayAlert(error);
      });
  }
  loadMore() {
    this.loadMoreBtn.addEventListener('click', e => {
      this.getShows();
      if (this.page === this.maxPages) {
        this.loadMoreBtn.textContent = 'No more shows available';
      }
    });
  }
}
export default App;
