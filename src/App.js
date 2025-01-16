import './App.css';
import { ProductCard } from './components/ProductCard';
import { ProductList } from './components/ProductList';

function App() {
  const products = [{
    imageSrc: "images/iphone.png",
    title: "iPhone 15 Pro",
    specification: [
      "A17 Pro chip with 6-core GPU",
      "3x or 5x Telephoto camera",
      "Up to 29 hours video playback",
    ],
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
      <ul>
        {products.filter(({price})=> price < 500).map(({title, price})=> (
         <li> 
          {title} cost ${price}
         </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
