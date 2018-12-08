import getData from './getData';
jest.mock('./getData');
describe('getData', () => {
  it('should return', async () => {
    const data = await getData();
    expect(data).toEqual(
      {
        page:1,
        pages:7,
        tv_shows:[{
          name:'Star Wars:The Clone Wars'
        }]
      }
    );
  });
});
