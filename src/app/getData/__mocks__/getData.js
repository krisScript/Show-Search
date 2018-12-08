const getData = () => {
  return Promise.resolve(
    {
      page:1,
      pages:7,
      tv_shows:[
        {
          name:'Star Wars:The Clone Wars'
        }
      ]
    }
  );
};
export default getData;
