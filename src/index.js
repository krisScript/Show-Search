'use strict';
import bulmaCarousel from 'bulma-carousel';
import './style/index.scss';
import getData from './app/getData/getData';
import createShowCard from './app/createShowCard/createShowCard';
import classToggle from './app/classToggle/classToggle';
import displayAlert from './app/displayAlert/displayAlert';
import searchForShow from './app/searchForShow/searchForShow';
import App from './app/App/App';
document.addEventListener('DOMContentLoaded', e => {
  const carousels = bulmaCarousel.attach();
  const app = new App();
  app.getShows();
  app.loadMore();
  searchForShow()
});
