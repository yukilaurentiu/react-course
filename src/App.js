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

  function handleClick(product){
    alert(`You clicked item is ${product.title} is $${product.price}`)
  }

  return (
    <div className="App">
      <ProductList>
        <ProductCard width="96px" 
                     height="96px" 
                     background="darkolivegreen" 
                     product={products[0]}
                     onClick={handleClick}/>
        <ProductCard width="64px" height="64px" product={products[1]}
                      onClick={handleClick}/>
        <ProductCard width="128px" 
                     height="128px" 
                     background="peru" 
                     product={products[2]}
                     onClick={handleClick}/>
      </ProductList>
    </div>
  );
}

export default App;
