import React from 'react';
import Landing from '../Components/Landing';
import Highlights from '../Components/Highlights';
import Featured from '../Components/Featured';
import Discounted from '../Components/Discounted';
import Explore from '../Components/explore';

export default function Home() {
  return (
    <>
    <Landing />
    <Highlights />
    <Featured />
    <Discounted />
    <Explore />
    </>
  );
};
