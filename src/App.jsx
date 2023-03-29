import React from 'react';
import Button from './Component/Button/Button';
import Card from './Component/Card/Card';
import Header from './Component/Header/Header';

const App = () => {
  return (
    <>
      <Header />
      <Button>Sort By Date</Button>
      <Card />
      <Button>See More</Button>
    </>
  );
};

export default App;
