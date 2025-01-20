import './App.css';
import { ProductCard } from './components/ProductCard';
import { ProductList } from './components/ProductList';
import { Fragment } from 'react';

function App() {
  const products = [{
    imageSrc: "images/iphone.png",
    title: "iPhone 15 Pro",
    specification: [
      "A17 Pro chip with 6-core GPU",
      "3x or 5x Telephoto camera",
      "Up to 29 hours video playback",
    ],
    stockCount:10,
    price: 999,
  },
  {
    imageSrc: "images/airpods.png",
    title: "AirPods Pro 2",
    specification: [
      "Noise Cancellation",
      "Dust, sweat, and water resistant",
      "Up to 6 hours of listening",
    ],
    stockCount:0,
    price: 249,
  },
  {
    imageSrc: "images/apple-watch.png",
    title: "Apple Watch 9",
    specification: [
      "45mm or 41mm case size",
      "Always-On Retina display",
      "Up to 18 hours normal use",
    ],
    stockCount:6,
    price: 399,
  },];

  function handlePurches(product){
    alert(`You clicked item is ${product.title} is $${product.price}`)
  }

  return (
    <div className="App">
      <ProductList>
        {products.map(product => (
          <ProductCard key={product.title} product={product} onPurches={handlePurches}/>
        ))}
      </ProductList>

      <h2>Product which cost up to $500</h2>
        {products.filter(({price})=> price < 500).map(({title, price})=> (
          <Fragment key={title}>
            <hr style={{ borderColor: 'slategray'}} />
            <p> 
              {title} cost ${price}
            </p>
          </Fragment>
        ))}
    </div>
  );
}

export default App;
