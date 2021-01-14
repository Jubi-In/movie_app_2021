import React from 'react';
import PropTypes from 'prop-types';

const foodILike = [
  {
    id:1, 
    name: "Leeknow",
    image:
      "https://newsimg.sedaily.com/2018/10/22/1S60DTDXZ4_1.jpg",
    rating: 5
  },
  {
    id:2, 
    name: "I.N",
    image:
      "https://file.mk.co.kr/meet/neds/2020/04/image_readtop_2020_381669_15865956264159622.jpg",
    rating: 4
  },
  {
    id:3,
    name: "seungmin",
    image:
      "https://www.topstarnews.net/news/photo/201812/549557_220165_327.jpg",
    rating: 4.5
  }
];

function  Food({ name, picture, rating }) {
  return <div>
    <h2>I like { name }</h2>
    <h4>{rating}/5.0</h4>
    <img src={ picture } alt={name}/>
    </div>;
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired
};

function App() {
  return (
    <div>
        {foodILike.map(dish => (
        <Food 
        key={dish.id} 
        name={dish.name} 
        picture={dish.image}
        rating={dish.rating}
         />
        ))}
    </div>
  );
}

export default App;
