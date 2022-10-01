import React from 'react';
import "./Home.css";
import Product from './Product';


function Home() {
  return (
    // i used BEM notations
    <div className="home">
      <div className="home__container">
        <img className="home__image" src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt="#" />

        <div className="home__row">
           <Product
            id="12321341"
            title= "The lean Startup a great book for beginners who are intrested in startup, 5 star rated book"
            price= {19.9}
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"
            rating= {5}
           />
           <Product
              id="49538094"
              title= "Kenwood WMix stand mixer for baking, Dough hook, 5 litre glass bowl "
              price= {239.18}
              image="https://images-eu.ssl-images-amazon.com/images/I/41695AgvXzL._SX300_SY300_QL70_FMwebp_.jpg"
              rating= {4}
           />
        </div>

        <div className="home__row">
            <Product
              id="1234567"
              title= "OnePlus 9 5G, amazing display (Arctic Sky, 8GB RAM, 128GB Storage)"
              price= {298.99}
              image="https://images-na.ssl-images-amazon.com/images/I/61fy%2Bu9uqPL._SL1500_.jpg"
              rating= {4}
           />
           <Product
                id="23445930"
                title= "Amazon Echo(5th gen) | smart speaker with alexa, Charcoal Fabric"
                price= {98.56}
                image="https://images-na.ssl-images-amazon.com/images/I/71YUWNNYBwL._SL1000_.jpg"
                rating= {5}
           />
           <Product
              id="3254354345"
              title= "New Apple iPad Pro (12.9 inch, Wi-fi, 128GB) - Gold (4th Generation)"
              price= {598.99}
              image="https://m.media-amazon.com/images/I/81m0oJwI-zS._AC_UY218_.jpg"
              rating= {4}
           />
        </div>

        <div className="home__row">
            <Product
              id="4903850"
              title= "Samsung LY8593037SSG5N 49' Curved LED gaming monitor"
              price= {199.12}
              image="https://m.media-amazon.com/images/I/71vNrx05QFL._AC_UY218_.jpg"
              rating= {3}
            />
        </div>
      </div>
    </div>
  )
}

export default Home
