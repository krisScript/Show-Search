const getData = async url => {
  const response = await fetch(url);
  const responseData = await response.json();
  return responseData;
};
export default getData;
// import loadData from './loadData';
// jest.mock('../getData/getData');
// describe('loadData', () => {
//   it('should return', async () => {
//     const data = await loadData();
//     expect(data).toEqual([
//       {
//         title: 'Front end dev'
//       }
//     ]);
//   });
// });
