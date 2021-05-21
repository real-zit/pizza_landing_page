import Feature from "./components/Feature/Feature";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import { productData } from "./components/Products/data";
import Product from "./components/Products/Product";

import { GlobalStyles } from "./globalStyles";

function App() {
  return (
    <>
      <GlobalStyles />
      <Hero />
      <Product heading="Choose your Favorite" data={productData} />
      <Feature />
      <Footer />
    </>
  );
}

export default App;
