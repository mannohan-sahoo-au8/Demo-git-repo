import React from 'react';
import Details from './Details';

const laptops = [
  {
    image: 'https://m.media-amazon.com/images/I/41imcbOhVbL.jpg',
    name: 'HP 14 ultra',
    description:
      "HP 14 Ultra Thin & Light 14' (35.56cms) Laptop (10th Gen i3-1005G1/8GB/256GB SSD/Win 10 Home/MS Office/1.47 Kg/Jet Black), 14s-cf3074TUby HP",
  },

  {
    image: 'https://m.media-amazon.com/images/I/41J4eXh-TaL.jpg',
    name: 'HP 14 ultra',
    description:
      "HP 14 Ultra Thin & Light 14' (35.56cms) Laptop (10th Gen i3-1005G1/8GB/256GB SSD/Win 10 Home/MS Office/1.47 Kg/Jet Black), 14s-cf3074TUby HP",
  },
  {
    image: ' https://m.media-amazon.com/images/I/41zWRIfFyDL.jpg',
    name: 'HP 14 ultra',
    description:
      "HP 14 Ultra Thin & Light 14' (35.56cms) Laptop (10th Gen i3-1005G1/8GB/256GB SSD/Win 10 Home/MS Office/1.47 Kg/Jet Black), 14s-cf3074TUby HP",
  },
  {
    image: ' https://m.media-amazon.com/images/I/41zWRIfFyDL.jpg',
    name: 'HP 14 ultra',
    description:
      "HP 14 Ultra Thin & Light 14' (35.56cms) Laptop (10th Gen i3-1005G1/8GB/256GB SSD/Win 10 Home/MS Office/1.47 Kg/Jet Black), 14s-cf3074TUby HP",
  },
  {
    image: ' https://m.media-amazon.com/images/I/41zWRIfFyDL.jpg',
    name: 'HP 14 ultra',
    description:
      "HP 14 Ultra Thin & Light 14' (35.56cms) Laptop (10th Gen i3-1005G1/8GB/256GB SSD/Win 10 Home/MS Office/1.47 Kg/Jet Black), 14s-cf3074TUby HP",
  },
  {
    image: ' https://m.media-amazon.com/images/I/41zWRIfFyDL.jpg',
    name: 'HP 14 ultra',
    description:
      "HP 14 Ultra Thin & Light 14' (35.56cms) Laptop (10th Gen i3-1005G1/8GB/256GB SSD/Win 10 Home/MS Office/1.47 Kg/Jet Black), 14s-cf3074TUby HP",
  },
];

const Some = () => {
  return (
    <div>
      {laptops.map((laptop) => {
        return <Details laptop={laptop} />;
      })}
    </div>
  );
};

export default Some;

//  {laptops.map((laptop) => {
//       return <Details laptop={laptop} /> // you can do it in spread operator like {...laptop} instead of laptop={laptop}
//      })}
