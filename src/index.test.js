import puppeteer from 'puppeteer';
describe('index', () => {
  let page;
  let testData;
  beforeAll(async () => {
    jest.setTimeout(60000);
    const browser = await puppeteer.launch({
      headless: false,
      slowMo: 100,
      args: ['--windows-size=1920,1080']
    });
    testData = {
      page: 1,
      pages: 7,
      tv_shows: [
        {
          name: 'Star Wars:The Clone Wars'
        }
      ]
    };
    page = await browser.newPage();
    await page.goto('http://localhost:1234/');
    await page.setRequestInterception(true);
    //Puppeteer dosnt intercept the first request
    //I'm currently trying to resolve the issue
    await page.on('request', request => {
      request.respond({
        content: 'application/json',
        headers: { 'Access-Control-Allow-Origin': '*' },
        body: JSON.stringify(testData)
      });
    });
  });
  afterAll(() => {
    browser.close();
  });
  it('should have title "Show Search"', async () => {
    const title = await page.title();
    expect(title).toMatch('Show Search');
  });
  describe('searching for job', () => {
    let showCard;
    beforeAll(async () => {
      await page.waitForSelector('#search-form');
      await page.type('input[name=title]', 'star wars');
      await page.$eval('#submit-btn', btn => btn.click());
      await page.$eval('#load-more-btn', btn => btn.click());
      showCard = await page.waitForSelector('.card');
    });
    it('element with class showCard should exist', () => {
      expect(showCard).toBeTruthy();
    });
    it('element with class showCard should exist', () => {
      expect(showCard).toBeTruthy();
    });
    it('showCardsContainer should have 21 children', async () => {
      const showCardsContainerChildCount = await page.$eval(
        '#show-cards-container',
        element => element.childElementCount
      );
      expect(showCardsContainerChildCount).toBe(21);
    });
    it('searchResultsContainer should have 1 child', async () => {
      const searchResultsContainer = await page.$eval(
        '#search-results-container',
        element => element.childElementCount
      );
      expect(searchResultsContainer).toBe(1);
    });
  });
});
